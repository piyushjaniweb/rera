import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { health3 } from '../../../../assets'
import 'primeicons/primeicons.css';

const items = [
    { icon: "pi pi-check", text: "New product launch in the existing market", color: "#293e8c" },
    { icon: "pi pi-check", text: "Existing product entry in the new market", color: "#293e8c" },
    { icon: "pi pi-check", text: "Repositioning of existing product", color: "#293e8c" },
    { icon: "pi pi-check", text: "Scaling up distributor and retailer network", color: "#293e8c" },
    { icon: "pi pi-check", text: "Outsourcing of support – telemarketing and digital Marketing", color: "#293e8c" },
];


const InfiniteGrowth = () => {
    return (
        <div className='font-helvetica'>
            <div class="bg-white lg:h-[90vh] rounded-b-4xl flex flex-col lg:flex-row lg:px-32 items-center justify-center">
                <div className="mt-8 px-4 w-auto lg:w-1/2 text-black">
                    <H2 className='!text-5xl leading-[50px]'>Market    <span className='text-primary'>Access</span></H2>
                    <H3 className='!text-slate-600 py-4 !text-base'>Pharmarack’s proprietary and unique datasets generate real-time information on drug sales and distribution covering – 12,000+ distributors and 2,00,000+ pharmacies pharmacies transacting 6,000+ companies’ products in India.</H3>

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

                <div className='lg:w-1/2 px-4 lg:px-0 my-8'>
                    <img src={health3} alt="" className='lg:mt-16 rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default InfiniteGrowth