import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { health } from '../../../../assets'
import bgimage from '../../../../assets/bgimage.png';

const PharmretailHero = () => {
    return (
        <div className='font-helvetica'>
            <div className="bg-gradient-to-r from-violet-950 via-indigo-900 to-indigo-800 h-[800px] lg:h-[550px] rounded-b-4xl flex flex-col lg:flex-row lg:py-8 lg:py-0 px-4 lg:px-40 items-center lg:justify-between">
                {/* Left Column: Text */}
                <div className="pt-8 lg:pt-0 w-full lg:w-3/5 text-white">
                    <H2 className="text-5xl lg:!text-6xl lg:leading-[70px]">Driving Public Health <div>Initiatives</div></H2>
                    <H3 className="text-white py-8">Partnering with government, domestic and international entities to strengthen healthcare systems, improve market access, and address key public health areas with innovative solutions.</H3>

                    <PrimaryBtn className="!px-8 py-4 !text-primary font-bold bg-white">Explore Features</PrimaryBtn>
                </div>

                <div className="relative w-full lg:w-2/5 flex items-center justify-center mb-[600px]">
                    <img
                        src={bgimage}
                        alt=""
                        className="pt-4 px-8 lg:px-0 animated slideInRight absolute top-0 inset-0"
                    />

                    <img
                        src={health}
                        alt=""
                        className="pt-6 lg:pt-4 px-8 lg:px-0 animated slideInLeft absolute top-0 inset-0 lg:my-8 h-auto lg:h-[543px] z-20"
                    />
                </div>
            </div>
        </div>
    )
}

export default PharmretailHero
