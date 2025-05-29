import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import logo from "../../assets/navbar/rera.webp";

function Register() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();
  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type
    const allowedTypes = ["image/jpeg", "image/webp", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid file format. Please upload a JPEG, WebP, or PNG image.", {
        duration: 4000,
        icon: '📷',
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !password || !role || !photo) {
      toast.error("Please fill all required fields", {
        duration: 4000,
        icon: '⚠️',
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("photo", photo);

    try {
      console.log("Sending registration data:", {
        name,
        email,
        phone,
        role,
        photo: photo ? photo.name : null
      });

      const { data } = await axios.post(
        "/api/users/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      console.log("Registration response:", data);
      
      localStorage.setItem("jwt", data.token);
      toast.success(`Welcome ${data.newUser.name}! Registration successful!`, {
        duration: 3000,
        icon: '🎉',
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
      setProfile(data.newUser);
      setIsAuthenticated(true);
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setPhoto("");
      setPhotoPreview("");
      
      navigateTo("/");
    } catch (error) {
      console.log("Registration Error Details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          headers: error.config?.headers,
          data: error.config?.data
        }
      });
      
      // Handle specific error cases
      if (error.response?.data?.message?.includes("already exists")) {
        toast.error(error.response.data.message, {
          duration: 4000,
          icon: '⚠️',
          style: {
            background: '#363636',
            color: '#fff',
          },
        });
      } else if (error.response?.data?.message?.includes("photo")) {
        toast.error(error.response.data.message, {
          duration: 4000,
          icon: '📷',
          style: {
            background: '#363636',
            color: '#fff',
          },
        });
      } else if (error.response?.data?.message?.includes("password")) {
        toast.error("Password must be at least 8 characters long", {
          duration: 4000,
          icon: '🔒',
          style: {
            background: '#363636',
            color: '#fff',
          },
        });
      } else {
        toast.error(
          error.response?.data?.message || "Registration failed. Please try again.",
          {
            duration: 4000,
            icon: '❌',
            style: {
              background: '#363636',
              color: '#fff',
            },
          }
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <form onSubmit={handleRegister}>
            <div className="font-semibold text-xl items-center text-center">
              <img
                src={logo}
                alt="Logo"
                className="inline-block w-60 h-20"
              />
            </div>

            <h1 className="text-xl font-semibold mb-6">Register</h1>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 mb-4 border rounded-md"
              required
            >
              <option value="">Select Role</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
                minLength={8}
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="photo w-20 h-20 mr-4">
                <img
                  src={photoPreview || "https://via.placeholder.com/150"}
                  alt="photo"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <input
                type="file"
                onChange={changePhotoHandler}
                className="w-full p-2 border rounded-md"
                accept="image/jpeg,image/webp,image/png"
                required
              />
            </div>
            <p className="text-center mb-4">
              Already registered?{" "}
              <Link to={"/login"} className="text-blue-600">
                Login Now
              </Link>
            </p>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
