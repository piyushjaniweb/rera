import { User } from "../models/user.model.js";
import cloudinary from 'cloudinary';
import bcrypt from 'bcryptjs'
import createTokenAndSaveCookies from '../jwt/AuthToken.js'

export const register = async(req,res)=>{
   try {
     console.log("Registration request received:", {
       body: req.body,
       files: req.files ? Object.keys(req.files) : null
     });

     if(!req.files || Object.keys(req.files).length===0){
        console.log("No photo uploaded");
        return res.status(400).json({message: "User photo is required"});
    }

    const {photo} = req.files;
    const allowedFormats = ["image/jpeg", "image/webp", "image/png"]

    if(!allowedFormats.includes(photo.mimetype)){
        console.log("Invalid photo format:", photo.mimetype);
        return res.status(400).json({message: "Invalid photo format. Only jpeg, webp and png are allowed"})
    }
    const {email,name,password,phone,role} = req.body;

    console.log("Validating required fields:", {
      email: !!email,
      name: !!name,
      password: !!password,
      phone: !!phone,
      role: !!role,
      photo: !!photo
    });

    if(!email || !name || !password || !phone || !role || !photo){
        console.log("Missing required fields");
        return res.status(400).json({message: "Please fill required fields"});
    }

    // Check for existing email
    const existingEmail = await User.findOne({email});
    if(existingEmail){
        console.log("User already exists with email:", email);
        return res.status(400).json({message: "User already exists with this email"});
    }

    // Check for existing phone
    const existingPhone = await User.findOne({phone});
    if(existingPhone){
        console.log("User already exists with phone:", phone);
        return res.status(400).json({message: "User already exists with this phone number"});
    }

    console.log("Uploading photo to cloudinary");
    const cloudinaryResponse = await cloudinary.uploader.upload(
        photo.tempFilePath
    )

    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.log("Cloudinary upload error:", cloudinaryResponse?.error);
        return res.status(500).json({message: "Error uploading photo"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        email,
        name,
        password: hashedPassword,
        phone,
        role,
        photo: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.url
        }
    });

    console.log("Saving new user");
    await newUser.save()

    if(newUser){
       const token = await createTokenAndSaveCookies(newUser._id, res)
       console.log("User registered successfully");
       res.status(201).json({
           message: "User registered successfully",
           newUser,
           token: token
       });
    }
   } catch (error) {
    console.log("Registration error:", error);
    
    // Handle MongoDB duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({
        message: `User already exists with this ${field}`
      });
    }
    
    return res.status(500).json({message: "Internal Server Error"})
   }
}

export const login = async (req,res) => {
    const {email, password, role} = req.body;

    try {
        if(!email || !password || !role){
            return res.status(400).json({message: "Please fill required fields"})
        }
        const user= await User.findOne({email}).select("+password");
        if( !user.password){
            return res.status(400).json({message: "User password is missing"})

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid email or password"})
        }

        if(user.role!==role){
            return res.status(400).json({message: `Given role ${role} not found`})
        }

        const token = await createTokenAndSaveCookies(user._id, res);
        console.log("Login", token);
        res.status(200).json({message:"User logged in successfully", user:{
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        }, token: token})
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal Server Error"})
    }
}

export const logout = (req,res) => {
   try {
     res.clearCookie("jwt");
    res.status(200).json({message: "User logged out successfully"})
   } catch (error) {
    console.log(error)
    return res.status(500).json({error: "Internal Server Error"})
   }
}


export const getMyProfile = async (req, res) => {
    const user = await req.user;
    res.status(200).json(user);
}

export const getAdmins = async (req, res) => {
    const admins = await User.find({role: "admin"});
    res.status(200).json(admins);
}