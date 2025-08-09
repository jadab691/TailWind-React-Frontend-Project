import React from 'react'
import { 
    FaFacebookSquare,
    FaGithubSquare,
    FaDribbbleSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';


const Footer=() => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 grid lg:grid-cols-2 gap-8 text-gray-300 '>
        <div>
            <h1 className='w-full text-4xl font-bold text-green-600'>React.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, impedit quod culpa beatae itaque omnis, 
            nostrum et eos quas soluta architecto aliquam eaque illum illo atque eum sequi tempore? Impedit!</p>
            <div className='flex justify-between md:w-[-75%] my-6'>
                <FaFacebookSquare  size={30}/>
                <FaInstagram  size={30}/>
                <FaTwitterSquare  size={30}/>
                < FaGithubSquare  size={30}/>
                < FaDribbbleSquare  size={30}/>
            </div>
        </div>
        <div className=' lg:col-span-3 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commers</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guide</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Job</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Footer</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>CLaim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Term</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer
