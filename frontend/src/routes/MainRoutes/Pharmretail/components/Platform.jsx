import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { enhance1, enhance2, enhance3, enhance4 } from '../../../../assets';
import { enhance } from '../../../../db';
import { useState } from 'react';
import { mobile4, googleplay, applestore } from '../../../../assets';

const Platform = () => {

    return (
        <div className="h-[700px] bg-white flex flex-col lg:flex-row justify-center items-center font-helvetica">
            <div className="h-[524px] lg:h-[538px] bg-[#ebecef] lg:w-[1200px] rounded-3xl flex flex-col lg:flex-row mx-2">
                <div className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:mx-4 mt-20 lg:mt-0'>
                    <H2 className='text-2xl lg:!text-5xl lg:leading-[50px] lg:!px-20 text-center px-4'>
                        A single, powerful, <span className='text-primary'>easy-to-use</span> platform
                    </H2>
                    <div className='flex gap-4 py-8 justify-center'>
                        <img src={googleplay} alt="" className='w-32 sm:w-48' />
                        <img src={applestore} alt="" className='w-32 sm:w-48' />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img src={mobile4} alt="" className='px-4 lg:px-0 mt-2 lg:mt-10 -mb-8 w-full ' />
                </div>

            </div>

        </div>
    )
}

export default Platform