import React from 'react'

const Newsletter =() =>  {
  return (
    <div className='w-full py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className= 'md:text-4xl sm:text-2xl text-1xl font-bold py-2'>Wants tips & tricks to optimize your flow ?</h1>
            <p>Sign up to your newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className=' border border-amber-50 mr-5 h-[30px] placeholder:text-gray-500' type="email " placeholder='Enter email' />
                <button className='bg-green-600 rounded-md w-[150px]  font-medium my-4 mx-auto  py-4 text-black hover:cursor-pointer'>Notify me</button>
            </div>
            <div>
                <p>We care about the protection of your data . Read our <p className='text-green-600'>Privacy policy.</p></p>
            </div>
        </div>     
      </div>
    </div>
  )
}

export default Newsletter
