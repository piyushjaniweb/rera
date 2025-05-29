import React, { useState } from 'react';
import { H2, H3 } from '../../../../components/Typography';
import { image1, image2, image3, image4 } from '../../../../assets';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Team = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='py-10 font-helvetica px-4 bg-[#ebecef]'>
            <H2 className='!text-4xl text-center py-6'>Our company's <span className='lora'>mission </span> & <span className='lora'>vision </span></H2>

            <div className='flex flex-col lg:flex-row  items-center justify-center my-8'>
                <div className='lg:w-1/2 flex flex-col items-center justify-center text-center'>
                    <p className='text-2xl'>
                        Vision
                        <div className="flex space-x-2 mt-2 w-30">
                            <span className="border-b-4 border-dotted w-1/6"></span> 
                            <span className="border-b-4 border-solid w-5/6"></span> 
                        </div>
                    </p>
                    <p className='text-md italic lg:px-20 font-light py-8'>Empowering pharmaceutical industry through innovation and insights backed by advanced technology.</p>
                </div>
                <div className='lg:w-1/2 flex flex-col items-center justify-center text-center my-4'>
                    <p className='text-2xl'>
                        Mission
                        <div className="flex space-x-2 mt-2 w-30">
                            <span className="border-b-4 border-dotted w-1/6"></span>
                            <span className="border-b-4 border-solid w-5/6"></span>
                        </div>
                    </p>
                    <p className='text-md italic lg:px-20 font-light py-8'>To deliver advanced, secure platforms and rich data insights that enable the pharmaceutical business with improved decision-making.</p>

                </div>
            </div>
        </div>
    );
}

export default Team;
