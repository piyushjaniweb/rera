import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { paper1 } from '../../../../assets'
import 'primeicons/primeicons.css';

const items = [
    { icon: "pi pi-check", text: "Returns Management", color: "#293e8c" },
    { icon: "pi pi-check", text: "Collaboration Channel", color: "#293e8c" },
    { icon: "pi pi-check", text: "Distributor Engagement", color: "#293e8c" },
];


const PharmaOrder = () => {
    return (
        <div className='font-helvetica mt-8 px-4'>
            <div class="bg-white rounded-b-4xl flex flex-col lg:flex-row lg:px-32 items-center justify-center">
                <div className="w-auto lg:w-2/5 text-black">
                    <H2 className='!text-5xl leading-[50px] '>The future of <span className='text-primary'>Pharmaceutical</span> supply chain</H2>
                    <H3 className='!text-slate-600 py-4 !text-base'>Seamless integration with SAP systems through a secure SAP adapter and CPI layer, enabling real-time visibility and business insights.</H3>

                    {/* <i className="pi pi-check" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#293e8c' }}></i>
                    <p>Easy Ordering</p> */}
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

                <div className='w-auto lg:w-3/5 flex justify-center items-center'>
                    <img src={paper1} alt="" className='mt-16 lg:h-[550px] h-56 w-[250px] lg:w-auto' />
                </div>
            </div>
        </div>
    )
}

export default PharmaOrder