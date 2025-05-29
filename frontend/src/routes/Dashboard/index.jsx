import React, { useEffect } from "react";


import CreateBlog from "./components/CreateBlog";
import MyBlogs from "./components/MyBlogs";
import MyProfile from "./components/MyProfile";

function Dashboard(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <CreateBlog {...props} />
            <MyBlogs {...props} />
            <MyProfile {...props} />


        </div>
    );
}

export default Dashboard;
