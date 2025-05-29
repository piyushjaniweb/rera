import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { enhance1, enhance2, enhance3, enhance4 } from '../../../../assets';
import { enhance } from '../../../../db';
import { useState } from 'react';
import { pharmconnect1, pharmconnect2, googleplay, applestore } from '../../../../assets';

const Platform = () => {

    return (
        <div className="my-10 h-[400px] lg:h-[600px] bg-white flex justify-center items-center font-helvetica">
            <div className="w-[330px] h-[300px] bg-[#ebecef]  lg:w-[1200px] rounded-3xl flex">
                <div className='w-full lg:w-1/2 flex items-center justify-center flex-col mx-4'>
                    <H2 className='text-2xl lg:!text-5xl  lg:leading-[50px] lg:!px-20 text-center'>
                        A single, powerful, <span className='text-primary'>easy-to-use</span> platform
                    </H2>
                    <div className='flex gap-4 py-8 justify-center'>
                        <img src={googleplay} alt="" className='w-32 sm:w-48' />
                        <img src={applestore} alt="" className='w-32 sm:w-48' />
                    </div>
                </div>

                <div className='w-auto lg:w-1/2 flex overflow-hidden gap-4 items-center pt-40 lg:px-8 '>
                    <img src={pharmconnect1} alt="" className='hidden lg:block w-[225px] h-[600px] rounded-2xl rotate-12 mt-48' />
                    <img src={pharmconnect2} alt="" className='hidden lg:block w-[225px] h-[600px] rounded-2xl rotate-12 mt-48 ' />
                </div>

            </div>

        </div>
    )
}

export default Platform