import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { pharmanalytics3 } from '../../../../assets'
import 'primeicons/primeicons.css';

const items = [
    { icon: "pi pi-check", text: "Faster Order Processing Cycles", color: "#293e8c" },
    { icon: "pi pi-check", text: "Resource Optimization", color: "#293e8c" },
    { icon: "pi pi-check", text: "Channel Management", color: "#293e8c" },
];


const InfiniteGrowth = () => {
    return (
        <div className='font-helvetica'>
            <div class="bg-white lg:h-[90vh] rounded-b-4xl flex flex-col lg:flex-row lg:px-32 items-center justify-center">
                <div className="mt-8 px-4 w-auto lg:w-1/2 text-black">
                    <H2 className='!text-5xl leading-[50px]'>Comprehensive    <span className='text-primary'>market data</span> at your fingertips</H2>
                    <H3 className='!text-slate-600 py-4 !text-base'>Automate data collection with TruSales and gain valuable and timely secondary sales and inventory insights. View advanced analytics tailored for Strategy Heads, Business Heads, Commercial Excellence Heads, Distribution Heads, and MIS Teams on TruSales Pro.</H3>

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

                <div className='lg:w-1/2 px-4 lg:px-0'>
                    <img src={pharmanalytics3} alt="" className='lg:mt-16 my-4 ' />
                </div>
            </div>
        </div>
    )
}

export default InfiniteGrowth