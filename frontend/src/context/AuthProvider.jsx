import React, {createContext, useContext, useEffect, useState} from "react";
import axios from 'axios';

export const AuthContext = createContext();

// Configure axios defaults
axios.defaults.baseURL = "http://localhost:4001";
axios.defaults.withCredentials = true;

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [profile, setProfile] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if user is already logged in
        const token = localStorage.getItem("jwt");
        if (token) {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        const fetchBlogs = async() => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get("/api/blogs/all-blogs");
                console.log("Blogs fetched:", response.data);
                if (response && response.data) {
                    setBlogs(response.data);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setError(error.response?.data?.message || "Failed to fetch blogs");
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchBlogs();
    }, []);
    
    return (
        <AuthContext.Provider value={{
            blogs,
            isAuthenticated,
            setIsAuthenticated,
            profile,
            setProfile,
            loading,
            error
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);