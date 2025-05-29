import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { mobile3 } from '../../../../assets'
import 'primeicons/primeicons.css';

const items = [
    { icon: "pi pi-check", text: "Loyalty Programs", color: "#293e8c" },
    { icon: "pi pi-check", text: "Increased Engagement", color: "#293e8c" },
    { icon: "pi pi-check", text: "Dedicated Storefront", color: "#293e8c" },
];


const InfiniteGrowth = () => {
    return (
        <div className='font-helvetica'>
            <div class="bg-white h-[800px] lg:h-[90vh] px-4 rounded-b-4xl flex flex-col lg:flex-row lg:px-32 items-center justify-center">
                <div className="w-full lg:w-1/2 text-black">
                    <H2 className='!text-5xl leading-[50px]'>Explore  <span className='text-primary'>infinite growth</span> avenues.</H2>
                    <H3 className='!text-slate-600 py-4 !text-base'>Implement effective loyalty programs, boost customer engagement, and leverage a dedicated company storefront to enhance visibility and sales performance.</H3>

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

                <div className='w-full lg:w-1/2'>
                    <img src={mobile3} alt="" className='lg:mt-16' />
                </div>
            </div>
        </div>
    )
}

export default InfiniteGrowth