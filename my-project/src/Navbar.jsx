import React, { useState } from 'react';
import { FaUser, FaBars, FaSearch, FaRegMinusSquare } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 

const Navbar = () => {


  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-4xl font-bold text-green-600'>React.</h1>
      
      <ul className='hidden md:flex hover:cursor-pointer'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden hover:cursor-pointer'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />} 
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-75 ease-in-out duration-500 hover:cursor-pointer' : 'fixed left-[-100%]' }>
        <h1 className='w-full text-4xl font-bold text-green-600 m-4 '>React.</h1>
        <ul className='pt-24 uppercase'>
          <li className='p-4 border-b'>Home</li>
          <li className='p-4 border-b'>Company</li>
          <li className='p-4 border-b'>Resources</li>
          <li className='p-4 border-b'>About</li>
          <li className='p-4 border-b'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
