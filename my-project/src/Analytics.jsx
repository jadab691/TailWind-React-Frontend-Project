import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Laptop from './assets/laptop.jpg'




const Analytics = () => {
  return (
    <div  className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="./" />
        <div className='flex flex-col justify-center'>
            <p className='text-green-600 font-bold'>Data Analytics dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi, 
                vero animi id placeat tenetur veritatis aperiam at iure voluptatibus 
                perferendis deserunt quae corrupti sapiente rem cum velit modi! Nostrum.</p>
                <button className='bg-black rounded-md w-[200px] font-medium my-6 mx-auto py-4 text-green-400 hover:cursor-pointer'>Get Started</button>
        </div>
      </div>
    </div>
  )
}



export default Analytics