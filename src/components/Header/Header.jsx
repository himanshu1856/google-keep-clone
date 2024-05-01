import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPenFancy } from "react-icons/fa";
import { CiSearch, CiBoxList, CiSettings } from "react-icons/ci";
import { IoMdRefresh } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex text-white py-2 px-5 drop-shadow-md  border-teal-400 border-b'>
      <div className='flex items-center'>
        <GiHamburgerMenu size={22} />
        <div className='flex gap-x-2 ms-5'>
          <div className='text-3xl uppercase text-teal-300 font-bold'>लेख...</div>
          <div className='flex items-center'><FaPenFancy size={22} /></div>
        </div>
      </div>

      <div className='w-2/3 flex bg-gray-500 rounded-md ms-10'>
        <div className='flex items-center p-2'>
          <CiSearch size={24} color='black' />
        </div>
        <input placeholder='Search' className='rounded-md h-full w-full outline-none text-white bg-gray-500 p-2'></input>
      </div>
      <div className='flex gap-x-4 items-center ms-64'>
        <IoMdRefresh size={24} />
        <CiBoxList size={24} />
        <CiSettings size={24} />
      </div>
    </div>
  )
}

export default Header