import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { pharmanalytics1 } from '../../../../assets'
import 'primeicons/primeicons.css';

const items = [
    { icon: "pi pi-check", text: "KPI Monitor", color: "#293e8c" },
    { icon: "pi pi-check", text: "Therapy Monitor", color: "#293e8c" },
    { icon: "pi pi-check", text: "Bonus Offer", color: "#293e8c" },
    { icon: "pi pi-check", text: "Inventory", color: "#293e8c" },
    { icon: "pi pi-check", text: "Growth Drivers", color: "#293e8c" },
    { icon: "pi pi-check", text: "Pricing Radar", color: "#293e8c" },
];


const PharmaOrder = () => {
    return (
        <div className='font-helvetica mt-8 px-4'>
            <div class="bg-white rounded-b-4xl flex flex-col lg:flex-row lg:px-32 items-center justify-center">
                <div className="w-auto lg:w-2/5 text-black">
                    <H2 className='!text-5xl leading-[50px] '>Evaluate trends and stay <span className='text-primary'>ahead of the curve</span></H2>
                    <H3 className='!text-slate-600 py-4 !text-base'>Streamline your market analysis, easily navigate the Indian Pharmaceutical Market (IPM), and uncover growth opportunities with an advanced data tool like PharmaTrac.</H3>

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

                <div className='w-auto lg:w-3/5 flex justify-center items-center my-4'>
                    <img src={pharmanalytics1} alt="" className='mt-16 lg:h-[250px] h-56 lg:w-auto' />
                </div>
            </div>
        </div>
    )
}

export default PharmaOrder