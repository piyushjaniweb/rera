import React from 'react'
import { H1Animate, H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { optimise } from '../../../../db'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Redefine = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='bg-[#ebecef] py-10 font-helvetica'>
            <H2 className='text-center py-6'>Optimise your strategy with comprehensive insights</H2>
            <H3 className='text-center lg:!mx-[500px] !text-base !text-slate-600 !leading-7'>Gain actionable insights on sales trends, market positioning, demand dynamics to drive informed decisions and business growth.</H3>

            <div className='flex lg:flex-row flex-col mx-auto justify-center'>
                {optimise.map((item, index) => (
                    <div
                        key={index}
                        className="mx-4 my-4 lg:my-8 rounded-xl w-auto lg:w-[350px] py-4 transition-all duration-300 ease-in-out"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            backgroundColor: hoveredIndex === index ? item.bgColor || '#ebecef' : 'white',
                            color: hoveredIndex === index ? item.textColor || 'white' : 'black',
                            transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                        }}
                    >
                        <div className="flex flex-col items-start justify-between flex-grow text-left px-8">
                            <div className="title-container">
                                <p className="font-helveticabold text-xl my-2 flex-grow text-left">
                                    {item.title}
                                </p>
                                
                            </div>

                            <div className="description-container">
                                <p className="mt-2 flex-grow md:leading-8 text-left"
                                    style={{
                                        color: hoveredIndex === index ? 'white' : '#64748B',
                                    }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>



                    </div>
                ))}
            </div>
        </div>
    )
}

export default Redefine