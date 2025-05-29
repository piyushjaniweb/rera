import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { enhanceimg } from '../../../../assets';
import { convenience } from '../../../../db';
import { useState } from 'react';

const Enhance = () => {

    return (
        <div className="mt-8 px-4 lg:h-[1400px] bg-white flex justify-center items-center font-helvetica">
            <div className=" lg:h-[1100px] bg-[#ebecef] w-[330px] lg:w-[1200px] rounded-3xl flex flex-col items-center">

                <div className=' py-10 flex flex-col items-center'>
                    <H2 className='text-center mx-20 text-5xl leading-[50px]'>Convenience at <span>your fingertips</span> </H2>
                    <H3 className='!text-slate-600 py-4 mx-20 lg:!mx-[350px] text-center !text-base'>Simplify your operations and enjoy enhanced visibility and insight.</H3>
                </div>
                <div className='py-8 flex gap-2 w-[300px] lg:w-[1000px]'>
                    <img src={enhanceimg} alt="" className='rounded-2xl object-cover' />
                </div>

                <div className='flex lg:flex-row flex-col mx-auto justify-center'>
                    {convenience.map((item, index) => (
                        <div
                            key={index}
                            className="mx-4 my-8 rounded-xl w-auto lg:w-[350px] py-4 transition-all duration-300 ease-in-out"
                            style={{
                                // backgroundColor: hoveredIndex === index ? item.bgColor || '#ebecef' : 'white',
                                // color: hoveredIndex === index ? item.textColor || 'white' : 'black',
                                // transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                            }}
                        >
                            <div className="flex flex-col items-center justify-between flex-grow text-center px-8">
                                <div className="title-container">
                                    <p className="font-helveticabold text-xl my-2 flex-grow text-center">
                                        {item.title}
                                    </p>

                                </div>

                                <div className="description-container">
                                    <p className="mt-2 flex-grow md:leading-8 text-center"
                                        style={{
                                            // color: hoveredIndex === index ? 'white' : '#64748B',
                                        }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>



                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Enhance