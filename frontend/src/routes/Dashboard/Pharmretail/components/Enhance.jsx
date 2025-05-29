import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { enhance1, enhance2, enhance3, enhance4 } from '../../../../assets';
import { enhance } from '../../../../db';
import { useState } from 'react';

const Enhance = () => {

    return (
        <div className="w-lg:h-[1400px] bg-white flex justify-center items-center font-helvetica">
            <div className="lg:h-[1100px] bg-[#ebecef] lg:w-[1200px] rounded-3xl flex flex-col items-center">

                <div className='px-4 w-full py-10 flex flex-col items-center'>
                    <H2 className='text-2xl lg:!text-5xl leading-[50px]'>Enhance your retail journey</H2>
                    <H3 className='!text-slate-600 py-4 lg:!mx-[350px] text-center !text-base'>Experience a smarter, faster, and more efficient way to manage pharmacy operations and expand your business with advanced features designed for ultimate efficiency and growth.</H3>
                </div>
                <div className='py-8 grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    <img src={enhance1} alt="" className='h-[470px] w-[280px] rounded-xl' />
                    <img src={enhance2} alt="" className='h-[470px] w-[280px] rounded-xl' />
                    <img src={enhance3} alt="" className='h-[470px] w-[280px] rounded-xl' />
                    <img src={enhance4} alt="" className='h-[470px] w-[280px] rounded-xl' />
                </div>


                <div className='flex lg:flex-row flex-col mx-auto justify-center'>
                    {enhance.map((item, index) => (
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