import React from 'react'
import { paper2 } from '../../../../assets';
import { H2, H3 } from '../../../../components/Typography';

const Maximize = () => {

    const items = [
        { icon: "pi pi-check", text: "Digitized Ledger", color: "#293e8c" },
        { icon: "pi pi-check", text: "Customised Schemes", color: "#293e8c" },
        { icon: "pi pi-check", text: "Invoices", color: "#293e8c" },
    ];


    return (
        <div className=" bg-[#ebecef] flex justify-center items-center font-helvetica">
            <div className="my-20 bg-white flex-col lg:flex-row w-[330px] lg:h-[600px] lg:w-[1200px] rounded-3xl flex justify-center items-center">
                <div className='mt-20 lg:mt-0 lg:h-[550px] w-auto lg:w-1/2 flex justify-center items-center px-8 lg:px-0'>
                    <img src={paper2} alt="" className='h-full' />
                </div>
                <div className='mt-8 px-4 lg:h-[500px] w-auto lg:w-1/2 flex flex-col justify-center '>
                    <div>
                        <H2 className='!text-4xl leading-[50px] pr-10'>Single platform to manage <span className='text-primary'>business</span> and <span className='text-primary'>collaborations</span> </H2>
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

    )
}

export default Maximize