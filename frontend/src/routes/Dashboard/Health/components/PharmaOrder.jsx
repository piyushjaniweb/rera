import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { health1 } from '../../../../assets'
import 'primeicons/primeicons.css';

const items = [
    { icon: "pi pi-check", text: "Market Intelligence", color: "#293e8c" },
    { icon: "pi pi-check", text: "Disease Management", color: "#293e8c" },
    { icon: "pi pi-check", text: "Supply Chain Resilience", color: "#293e8c" },
    { icon: "pi pi-check", text: "Market Access", color: "#293e8c" },
    { icon: "pi pi-check", text: "Pharmacy Engagement", color: "#293e8c" },
];


const PharmaOrder = () => {
    return (
        <div className='font-helvetica mt-8 px-4'>
            <div class="bg-white rounded-b-4xl flex flex-col lg:flex-row lg:px-32 items-center justify-center">
                <div className="w-auto lg:w-2/5 text-black">
                    <H2 className='!text-5xl leading-[50px] '>Pharmarack’s  <span className='text-primary'>Public Health</span> Capabilities</H2>
                    <H3 className='!text-slate-600 py-4 !text-base'>Pharmarack supports the Public Health ecosystem and collaborates with stakeholders in domain of supply chain strengthening, family planning, women’s health, nutrition, climate, and other relevant domains.</H3>

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

                <div className='w-full lg:w-3/5 flex justify-center items-center lg:my-20 my-8'>
                    <img src={health1} alt="" className=' lg:h-[550px] w-full lg:w-auto rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default PharmaOrder