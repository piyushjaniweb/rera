import React from 'react'
import { health4 } from '../../../../assets';
import { H2, H3 } from '../../../../components/Typography';

const Engagements = () => {

    const items = [
        { icon: "pi pi-check", text: "Pharmacy engagements", color: "#293e8c" },
        { icon: "pi pi-check", text: "Pharmacy education and awareness", color: "#293e8c" },
        { icon: "pi pi-check", text: "Empowering pharmacies to deliver basic healthcare", color: "#293e8c" },
    ];


    return (
        <div className=" bg-[#ebecef] flex justify-center items-center font-helvetica">
            <div className="mx-2 my-20 bg-white flex-col lg:flex-row w-[330px] lg:h-[550px] lg:w-[1200px] rounded-3xl flex justify-center items-center">
                <div className='lg:mt-0 lg:h-[550px] lg:w-1/2 flex justify-center items-center px-4 lg:px-0'>
                    <img src={health4} alt="" className='mt-16 lg:mt-0  lg:h-[450px] h-56 w-[450px]  rounded-2xl' />
                </div>
                <div className='mt-8 px-4 lg:h-[500px] w-auto lg:w-1/2 flex flex-col justify-center '>
                    <div>
                        <H2 className='!text-4xl leading-[50px] pr-10'>Pharmacy   <span className='text-primary'>Engagements</span></H2>
                        <H3 className='!text-slate-600 py-4 !text-base pr-10'>Pharmarack enhances the capabilities of pharmacies and retailers through targeted engagement models to provide basic health care to community.</H3>
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

export default Engagements