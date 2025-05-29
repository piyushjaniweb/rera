import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { Link } from 'react-router-dom';

const PharmretailHero = () => {


  return (
    <div className='font-helvetica'>
      <div className="bg-gradient-to-r from-violet-950 via-indigo-900 to-indigo-800 lg:h-[400px] rounded-b-4xl flex flex-col lg:flex-row lg:py-8 lg:py-0 px-4 lg:px-8 items-center justify-center">
        <div className="py-8 lg:pt-0 w-auto lg:w-3/5 text-white text-center">
          <H2 className='text-2xl lg:!text-4xl lg:leading-[50px]'>Transforming Pharma with <span className='lora'>Advanced Technology </span>and <span className='lora'>Innovative Solutions</span></H2>
          <H3 className='!text-md text-white py-8 lg:px-20'>We digitally empower retailers, distributors, and pharmaceutical companies with secure platforms, facilitating seamless transactions and transforming commerce into actionable insights.</H3>

          <nav aria-label="breadcrumb" className="flex justify-center">
            <ol className="flex items-center space-x-2 text-center">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li className="text-white"> &gt; </li>
              <li className="text-white">About</li>
            </ol>
          </nav>
        </div>
      </div>
      

    </div>
  )
}

export default PharmretailHero;
