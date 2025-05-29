import React, { useEffect } from "react";
import { useAuth } from "../../../../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Container } from "../../../../components/Layout";

function Blogs() {
  const { blogs, loading, error } = useAuth();

  useEffect(() => {
    console.log("Blogs Component Mounted");
    console.log("Current blogs state:", {
      blogs,
      loading,
      error,
      blogsLength: blogs?.length,
      blogsType: typeof blogs,
      isArray: Array.isArray(blogs)
    });
  }, [blogs, loading, error]);

  if (loading) {
    return (
      <div className="container mx-auto my-12 p-4">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    toast.error("Failed to load blogs. Please try again later.", {
      duration: 4000,
      icon: '❌',
      style: {
        background: '#363636',
        color: '#fff',
      },
    });
    return (
      <div className="container mx-auto my-12 p-4">
        <div className="text-center text-red-500">
          Failed to load blogs. Please try again later.
        </div>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="container mx-auto my-12 p-4">
        <h1 className="text-2xl font-bold mb-6">Listed Properties</h1>
        <div className="text-center text-gray-500">
          No properties available at the moment.
        </div>
      </div>
    );
  }

  return (
    <Container>
    <div>
      <div className="container mx-auto my-12 p-4">
        <h1 className="text-2xl font-bold mb-6">Listed Properties</h1>
        {/* <p className="text-center mb-8">
          The concept of gods varies widely across different cultures,
          religions, and belief systems
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {blogs.map((blog, index) => {
            console.log("Rendering blog:", {
              index,
              id: blog?.id,
              title: blog?.title,
              imageUrl: blog?.blogImage?.url
            });
            
            return (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id || index}
                className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    console.error("Image failed to load:", blog?.blogImage?.url);
                    e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-semibold">{blog?.title}</h2>
                  <p className="text-sm">{blog?.category}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
    </Container>
  );
}

export default Blogs;
