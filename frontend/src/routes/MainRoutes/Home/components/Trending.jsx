import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAuth } from "../../../../context/AuthProvider";
import { Link } from "react-router-dom";
import { Container } from "../../../../components/Layout";

function Trending() {
    const { blogs, loading } = useAuth();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    if (loading) {
        return (
            <div className="container mx-auto my-12 p-4">
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    if (!blogs || blogs.length === 0) {
        return null;
    }

    return (
        <Container>
            <div className="container mx-auto my-12 p-4">
                <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {blogs.map((blog, index) => (
                        <Link
                            to={`/blog/${blog._id}`}
                            key={blog._id || index}
                            className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 mx-2"
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
                    ))}
                </Carousel>
            </div>
        </Container>
    );
}

export default Trending;
