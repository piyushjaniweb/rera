import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Login from './Login'

export default function Routes(props) {
    const location = useLocation();
    const isAuthRoute = location.pathname === "/dashboard" || location.pathname === "/register" || location.pathname === "/login";

    const routes = useRoutes([
        {
            path: "/*",
            element: <MainRoutes {...props} />,
        },
        {
            path: "/dashboard",
            element: <Dashboard {...props} />,
        },
        {
            path: "/register",
            element: <Register {...props} />,
        },
        {
            path: "/login",
            element: <Login {...props} />,
        },
    ]);

    return (
        <main className="">
            {routes}
            {!isAuthRoute && (
                <div className="">
                    <a
                        href="https://wa.me/+917862931074"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                        className="text-white text-4xl hover:text-white fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg z-50 w-16 h-16 flex items-center justify-center"
                    >
                        <i className="bx bxl-whatsapp"></i>
                    </a>
                </div>
            )}
        </main>
    );
}
