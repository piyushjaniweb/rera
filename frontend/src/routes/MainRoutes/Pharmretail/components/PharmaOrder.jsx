import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { mobile1 } from '../../../../assets'
import 'primeicons/primeicons.css';

const items = [
    { icon: "pi pi-check", text: "Easy Ordering", color: "#293e8c" },
    { icon: "pi pi-check", text: "Quick Delivery", color: "#293e8c" },
    { icon: "pi pi-check", text: "24/7 Support", color: "#293e8c" },
];


const PharmaOrder = () => {
    return (
        <div className='font-helvetica'>
            <div class="px-4 py-8 lg:py-0 bg-white lg:h-[90vh] rounded-b-4xl flex flex-col lg:flex-row lg:px-32 items-center justify-center">
                <div className="lg:w-1/2 text-black">
                    <H2 className='!text-5xl leading-[50px]'>India’s no.1 <span className='text-primary'>Pharma Ordering</span> platform</H2>
                    <H3 className='!text-slate-600 py-4 !text-base'>Simplify your ordering process, find products easily with AI-enabled search, access personalized schemes for retailers to maximize profitability and more.</H3>

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

                <div className='lg:w-1/2'>
                    <img src={mobile1} alt="" className='mt-16' />
                </div>
            </div>
        </div>
    )
}

export default PharmaOrder