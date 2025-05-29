import React from 'react'
import { mobile2 } from '../../../../assets';
import { H2, H3 } from '../../../../components/Typography';

const Maximize = () => {

    const items = [
        { icon: "pi pi-check", text: "Expand Network", color: "#293e8c" },
        { icon: "pi pi-check", text: "Boost Sales", color: "#293e8c" },
        { icon: "pi pi-check", text: "Active Chemist Engagement", color: "#293e8c" },
    ];


    return (
        <div className="h-auto lg:h-screen my-8 bg-[#ebecef] flex justify-center items-center font-helvetica">
            <div className='my-8 mx-4 lg:mx-0 lg:my-0 '>
                <div className="px-4 bg-white lg:h-[500px] lg:w-[1200px] rounded-3xl flex flex-col lg:flex-row justify-center items-center">
                    <div className='lg:h-[500px] w-full lg:w-1/2 flex justify-center items-center '>
                        <img src={mobile2} alt="" className='lg:h-full' />
                    </div>
                    <div className='h-[500px] lg:w-1/2 flex flex-col justify-center '>
                        <div>
                            <H2 className='!text-4xl leading-[50px]'>Maximise your <span className='text-primary'>business potential</span> </H2>
                            <H3 className='!text-slate-600 py-4 !text-base pr-10'>Manage multiple pharma companies from a single platform, gaining visibility into inventory levels.</H3>
                        </div>

                        <div className='py-8'>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                {items.map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                        <i className={item.icon} style={{ fontSize: '1rem', fontWeight: 'bold', color: item.color, marginRight: '12px' }}></i>
                                        <p style={{ margin: 0 }}>{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Maximize