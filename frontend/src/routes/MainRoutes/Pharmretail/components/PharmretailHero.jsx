import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { pharmretail } from '../../../../assets'
import bgimage from '../../../../assets/bgimage.png';

const PharmretailHero = () => {
    return (
        <div className='font-helvetica'>
            <div className="bg-gradient-to-r from-violet-950 via-indigo-900 to-indigo-800 h-[780px] lg:h-[550px] rounded-b-4xl flex flex-col lg:flex-row lg:py-8 lg:py-0 px-4 lg:px-40 items-center lg:justify-between">
                {/* Left Column: Text */}
                <div className="pt-8 lg:pt-0 w-full lg:w-3/5 text-white">
                    <H2 className="text-5xl lg:!text-6xl lg:leading-[70px]">India’s largest B2B<div>e-commerce platform</div></H2>
                    <H3 className="text-white py-8">Pharmarack retailer app is trusted by 2L+ Chemist and 16K+ Distributors as their no. 1 ordering platform.</H3>

                    <PrimaryBtn className="!px-8 py-4 !text-primary font-bold bg-white">Explore Features</PrimaryBtn>
                </div>

                <div className="relative w-full lg:w-2/5 flex items-center justify-center mb-[600px]">
                    <img
                        src={bgimage}
                        alt=""
                        className="pt-4 px-8 lg:px-0 animated slideInRight absolute top-0 inset-0"
                    />

                    <img
                        src={pharmretail}
                        alt=""
                        className="pt-6 lg:pt-4 px-8 lg:px-0 animated slideInLeft absolute top-0 inset-0 lg:my-8 h-auto lg:h-[543px] z-20"
                    />
                </div>
            </div>
        </div>
    )
}

export default PharmretailHero
