import React from 'react'
import { pharmanalytics2 } from '../../../../assets';
import { H2, H3 } from '../../../../components/Typography';

const Maximize = () => {

    const items = [
        { icon: "pi pi-check", text: "Granular insights in across 61 markets", color: "#293e8c" },
        { icon: "pi pi-check", text: "Navigate market complexities with precision", color: "#293e8c" },
        { icon: "pi pi-check", text: "Competitive landscape at SKU level", color: "#293e8c" },
        { icon: "pi pi-check", text: "Mapping regional potential", color: "#293e8c" },
        { icon: "pi pi-check", text: "Targeted approach", color: "#293e8c" },
    ];


    return (
        <div className=" bg-[#ebecef] flex justify-center items-center font-helvetica">
            <div className="my-20 bg-white flex-col lg:flex-row w-[330px] lg:h-[600px] lg:w-[1200px] rounded-3xl flex justify-center items-center">
                <div className='mt-20 lg:mt-0 lg:h-[550px] w-auto lg:w-1/2 flex justify-center items-center mx-20 lg:px-0'>
                    <img src={pharmanalytics2} alt="" className='lg:h-[250px] h-40 w-full lg:w-auto' />
                </div>
                <div className='mt-8 px-4 lg:h-[500px] w-auto lg:w-1/2 flex flex-col justify-center '>
                    <div>
                        <H2 className='!text-4xl leading-[50px] pr-10'>Make  <span className='text-primary'>informed decisions</span> with  <span className='text-primary'>actionable insights</span> </H2>
                        <H3 className='!text-slate-600 py-4 !text-base pr-10'>Unlock precise market intelligence across 61 markets with granular insights and targeted strategies. Explore possibilities with Market Pulse and Market Performance.</H3>
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

    )
}

export default Maximize