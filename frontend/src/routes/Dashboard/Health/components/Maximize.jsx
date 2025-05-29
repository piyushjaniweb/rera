import React from 'react'
import { health2 } from '../../../../assets';
import { H2, H3 } from '../../../../components/Typography';

const Maximize = () => {

    const items = [
        { icon: "pi pi-check", text: "Disease burden estimation and hotspot identification", color: "#293e8c" },
        { icon: "pi pi-check", text: "Disease preparedness", color: "#293e8c" },
        { icon: "pi pi-check", text: "Antimicrobial resistance monitoring", color: "#293e8c" },
    ];


    return (
        <div className=" bg-[#ebecef] flex justify-center items-center font-helvetica">
            <div className="mx-2 my-20 bg-white flex-col lg:flex-row w-[330px] lg:h-[450px] lg:w-[1200px] rounded-3xl flex justify-center items-center">
                <div className='lg:my-4 lg:h-[420px] w-auto lg:w-1/2 flex justify-center items-center px-4 lg:px-0'>
                    <img src={health2} alt="" className='mt-16 lg:mt-0 lg:h-[370px] h-56 lg:w-[500px] rounded-2xl' />
                </div>
                <div className='mt-8 px-4 lg:h-[500px] w-auto lg:w-1/2 flex flex-col justify-center '>
                    <div>
                        <H2 className='!text-4xl leading-[50px] pr-10'>Disease  <span className='text-primary'>Management</span></H2>
                        <H3 className='!text-slate-600 py-4 !text-base pr-10'>Pharmarack is committed to strengthening public health by actively participating in disease surveillance, combating antimicrobial resistance (AMR), and enhancing pandemic preparedness.</H3>
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