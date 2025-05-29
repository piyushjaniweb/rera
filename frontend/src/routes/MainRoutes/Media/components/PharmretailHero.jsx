import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { PrimaryBtn } from '../../../../components/Button'
import { pharmretail } from '../../../../assets'
import { Link } from 'react-router-dom';


const PharmretailHero = () => {
    return (
        <div className='font-helvetica'>
            <div class="bg-gradient-to-r from-violet-950 via-indigo-900 to-indigo-800 lg:h-[400px] rounded-b-4xl flex flex-col lg:flex-row lg:py-8 lg:py-0 px-4 lg:px-40 items-center justify-center">
                <div className="py-8 lg:pt-0 w-auto lg:w-3/5 text-white text-center">
                    <H2 className='!text-4xl lg:leading-[50px]'>Know about our latest <span className='lora'>News</span></H2>
                    <H3 className='!text-md text-white py-8'>Discover the latest trends, expert opinions, and in-depth analyses to keep you informed and engaged. Stay connected and ahead in the industry with our curated media resources.</H3>

                    <nav aria-label="breadcrumb" className="flex justify-center">
  <ol className="flex items-center space-x-2 text-center">
    <li>
      <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
    </li>
    <li className="text-white"> &gt; </li>
    <li className="text-white">Media</li>
  </ol>
</nav>


                    {/* <PrimaryBtn className='!px-8 py-4 !text-primary font-bold bg-white'>Explore Features</PrimaryBtn> */}
                </div>


            </div>
        </div>
    )
}

export default PharmretailHero