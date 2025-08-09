import React from 'react'
import Navbar from './Navbar'
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

        <p className='text-green-600 font-bold p-2'>GROW WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>grow with data</h1>

        <div className='flex justify-center  '>
            <p className='md:text-4xl sm:text-2xl text-1xl font-medium text-amber-300 py-4'>
                Fast, Flexible Financing for .
            </p>
            <ReactTyped 
            className= 'md:text-4xl sm:text-2xl text-1xl text-amber-100 py-4'
            strings={["BTB, BCD, SASS"]} 
            typeSpeed={100} 
            backSpeed={100} loop />
        </div>

        <div className='md:2xl text-1xl font-semibold text-gray-500'>
            <p>Monitor your data analytics to increse your BTC, BCD, SASS</p>
            <button className='bg-green-600 rounded-md w-[200px] font-medium my-6 mx-auto py-4 text-black hover:cursor-pointer'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero