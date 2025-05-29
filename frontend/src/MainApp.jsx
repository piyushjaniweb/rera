import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Navbar from "./container/Navbar";
import Navbar from "./container/Navbar/index";
import Routes from "./routes";
import Footer from "./container/Footer/index";
import { useAuth } from "./context/AuthProvider";
import { AuthProvider } from "./context/AuthProvider";


const AppContent = (props) => {
    const location = useLocation();
    const isAuthRoute = location.pathname === "/dashboard" || location.pathname === "/register" || location.pathname === "/login";
    const { blogs, isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="relative min-h-[100vh] flex flex-col">
            {!isAuthRoute && (
                <div>
                    <Navbar {...props} />
                </div>
            )}
            <div className="flex-1">
                <Routes {...props} />
            </div>
            {!isAuthRoute && <Footer />}
        </div>
    );
};

const MainApp = (props) => {
    return (
        <AuthProvider>
            <Router>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{
                        duration: 3000,
                        style: {
                            background: '#363636',
                            color: '#fff',
                        },
                        success: {
                            duration: 3000,
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                        error: {
                            duration: 4000,
                            theme: {
                                primary: '#ff4b4b',
                            },
                        },
                    }}
                />
                <AppContent {...props} />
            </Router>
        </AuthProvider>
    );
};
export default MainApp;


