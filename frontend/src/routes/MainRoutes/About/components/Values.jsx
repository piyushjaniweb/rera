import React, { useState } from 'react';
import { H2, H3 } from '../../../../components/Typography';
import { values } from '../../../../db';

const Values = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="lg:h-[950px] bg-white flex flex-col justify-center items-center font-helvetica">
            <div className="lg:h-[850px] bg-[#ebecef] w-[330px] lg:w-[1200px] rounded-3xl flex flex-col items-center my-20 py-8">
                <div className="px-4 w-full py-10 flex flex-col items-center">
                    <H2 className='!text-4xl'>Our <span className='lora'>Values </span></H2>
                    <H3 className='!text-slate-600 py-4 lg:!mx-[250px] text-center !text-base'>
                        Our values form the foundation of our operations, guiding us to innovate relentlessly, uphold unwavering integrity, and prioritize our customers at every step.</H3>
                </div>
                <div className='flex lg:flex-row flex-col'>
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white mx-4 my-4 shadow-lg rounded-lg w-auto lg:w-[250px] py-4 transition-all duration-300 ease-in-out"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                            }}
                        >
                            <div className="flex flex-col items-left justify-start flex-grow text-left px-8 py-6">
                                <div className="title-container">
                                    <img src={item.image} alt="" className='w-20 h-20' />
                                    <p className="font-helveticabold text-xl mt-6 flex-grow">
                                        {item.title}
                                    </p>

                                </div>

                                <div className="description-container">
                                    <p
                                        className="mt-6 flex-grow md:leading-8 text-primary"
                                        style={{
                                            // color: hoveredIndex === index ? 'white' : '#64748B',
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Values;
