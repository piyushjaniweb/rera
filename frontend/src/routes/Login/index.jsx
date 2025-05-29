import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import logo from "../../assets/navbar/rera.webp";

function Login() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
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
    try {
      console.log("Attempting login with:", { email, role });
      
      const { data } = await axios.post(
        "/api/users/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login successful:", {
        user: data.user,
        message: data.message
      });

      // Store the token in localStorage
      localStorage.setItem("jwt", data.token);
      
      toast.success(`Welcome back, ${data.user.name}!`, {
        duration: 3000,
        icon: '👋',
        style: {
          background: '#363636',
          color: '#fff',
        },
      });

      setProfile(data.user);
      setIsAuthenticated(true);
      
      // Reset form
      setEmail("");
      setPassword("");
      setRole("");
      
      navigateTo("/");
    } catch (error) {
      console.log("Login error:", {
        message: error.message,
        response: error.response?.data
      });
      
      // Handle specific error cases
      if (error.response?.data?.message?.includes("Invalid email or password")) {
        toast.error("Invalid email or password. Please try again.", {
          duration: 4000,
          icon: '🔒',
          style: {
            background: '#363636',
            color: '#fff',
          },
        });
      } else if (error.response?.data?.message?.includes("role")) {
        toast.error("Invalid role selected. Please try again.", {
          duration: 4000,
          icon: '👤',
          style: {
            background: '#363636',
            color: '#fff',
          },
        });
      } else {
        toast.error(
          error.response?.data?.message || "Login failed. Please try again.",
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
          <form onSubmit={handleLogin}>
            <div className="font-semibold text-xl items-center text-center">
              <img
                src={logo}
                alt="Logo"
                className="inline-block w-60 h-20"
              />
            </div>
            <h1 className="text-xl font-semibold mb-6">Login</h1>
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
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <p className="text-center mb-4">
              New User?{" "}
              <Link to={"/register"} className="text-blue-600">
                Register Now
              </Link>
            </p>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 hover:bg-blue-800 duration-300 rounded-md text-white disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
