import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cloudinary from 'cloudinary';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 4001;
const Mongo_Url = process.env.MONGO_URI;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp"
}));

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',  // Your frontend URL
  credentials: true,  // Allow credentials (cookies, headers)
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"]
}));

// Handle preflight requests for all routes
app.options('*', cors());

// MongoDB connection
try {
    mongoose.connect(Mongo_Url);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`Backend listening on port ${port}`);
    });
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy, trying ${port + 1}`);
      app.listen(port + 1, () => {
        console.log(`Backend listening on port ${port + 1}`);
      });
    } else {
      console.error('Error starting server:', error);
    }
  }
};

startServer();
