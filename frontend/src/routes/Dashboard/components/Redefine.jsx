import React, { useState } from 'react';
import { H2, H3 } from '../../../../components/Typography';
import { image1, image2, image3, image4 } from '../../../../assets'; 
import { FaLinkedin } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Redefine = () => {

    const images = [
        { 
            src: image1, 
            name: "Dhruv Gulati", 
            designation: "CEO and Board Member",
            linkedin: "https://www.linkedin.com/in/dhruv-gulati/"
        },
        { 
            src: image2, 
            name: "Amit Kaul", 
            designation: "Chief Operating Officer",
            linkedin: "https://www.linkedin.com/in/amit-kaul/"
        },
        { 
            src: image3, 
            name: "Chandrakant Agrawal", 
            designation: "Chief Financial Officer",
            linkedin: "https://www.linkedin.com/in/chandrakant-agrawal/"
        },
        { 
            src: image4, 
            name: "Narayan Swami", 
            designation: "Chief Human Resources Officer",
            linkedin: "https://www.linkedin.com/in/narayan-swami/"
        }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='bg-white py-10 font-helvetica px-4'>
            <H3 className='text-center lg:!mx-[200px] !text-base !text-slate-600 !leading-7 my-8'>
                At Pharmarack, we’re revolutionising the Indian Pharma Industry with innovative technology solutions. 
                As India’s largest B2B e-commerce platform, we pioneer commerce-to-insights technology, serving pharma brands, chemists, distributors, and manufacturers with inclusive, tech-driven products.
                Supported by leading Indian Pharma companies, Pharmarack strengthens trade across India, reaching over 200,000 chemists;12,000 distributors, and facilitating transactions for 300,000+ SKUs from 6,000+ brands nationwide.
            </H3>

            <H2 className='!text-4xl text-center py-6'>Team <span className='lora'>Members </span></H2>

            <H3 className='text-center lg:!mx-[500px] !text-base !text-slate-600 !leading-7'>
                Meet the dedicated individuals who bring the expertise and passion to drive our vision forward as a cohesive team.
            </H3>

            {/* Grid Layout for images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 py-8 lg:py-0 lg:mx-48">
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className="relative group flex" 
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="my-4 relative group-hover:bg-black group-hover:bg-opacity-80 transition-all duration-300 rounded-2xl">
                            <img
                                src={image.src}
                                alt={`Image ${index + 1}`}
                                className=" lg:max-w-[250px] h-auto rounded-2xl group-hover:opacity-40 transition-all duration-300"
                            />
                        </div>

                        {hoveredIndex === index && (
                            <div className="absolute bottom-8 left-0 right-0 bg-transparent bg-opacity-70 text-white text-center py-2 rounded-b-2xl">
                                <p className="font-bold py-4">{image.name}</p>
                                <p>{image.designation}</p>

                                {/* LinkedIn Logo and Link */}
                                <div className="pt-2">
                                    <a href={image.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin 
                                            size={24} // Control the size of the icon
                                            className="mx-auto text-blue-500 hover:opacity-80 transition-all duration-300" 
                                        />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Redefine;
