import React from 'react'
import Single from './assets/single.png' 
import Double from './assets/double.png'
import Triple from './assets/triple.png'

const Cards=()=> {
  return (
    <div className='py-[10rem] px-4 w-full bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="./" />
            <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
            <p className='text-center font-bold text-4xl'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                <p className='py-2 border-b mx-8'>1 Granted user</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-green-600 rounded-md w-[200px] font-medium my-6 mx-auto py-4 text-black-800 hover:cursor-pointer'>Start Trial</button>
        </div>


        <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-[-4] rounded-lg hover:scale-105 duration-300'>
            <img className='w-20  mx-auto mt-[-3rem]  bg-transparent' src={Double} alt="./" />
            <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
            <p className='text-center font-bold text-4xl'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                <p className='py-2 border-b mx-8'>1 Granted user</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-black rounded-md w-[200px] font-medium my-6 mx-auto py-4 text-green-400 hover:cursor-pointer'>Start Trial</button>
        </div>


        <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="./" />
            <h2 className='text-2xl font-bold text-center py-8'>Single user</h2>
            <p className='text-center font-bold text-4xl'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                <p className='py-2 border-b mx-8'>1 Granted user</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-green-600 rounded-md w-[200px] font-medium my-6 mx-auto py-4 text-black-800 hover:cursor-pointer'>Start Trial</button>
        </div>
      </div>
    </div>
    
  )
}

export default Cards
