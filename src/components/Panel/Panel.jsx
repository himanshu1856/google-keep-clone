import React from 'react'

import {FaRegTrashAlt, FaRegBell  } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdLabelOutline } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";

const Panel = ({ handleOptionClick }) => {
  
  return (
    <div className='text-white h-full w-1/5 flex p-4'>
      <ul>
        <li className='flex gap-8 mb-4' onClick={() => handleOptionClick('Notes')}>
          <span className='flex items-center'><FaPencil size={20} /></span>
          Notes</li>
        <li className='flex gap-8 mb-4' onClick={() => handleOptionClick('Reminders')}>
          <span className='flex items-center'><FaRegBell size={22} /></span>
          Reminders</li>
        <li className='flex gap-8 mb-4' onClick={() => handleOptionClick('Edit labels')}>
          <span className='flex items-center'><MdLabelOutline  size={22} /></span>
          Edit labels</li>
        <li className='flex gap-8 mb-4' onClick={() => handleOptionClick('Archives')}>
          <span className='flex items-center'><IoArchiveOutline size={22} /></span>
          Archives</li>
        <li className='flex gap-8 mb-4' onClick={() => handleOptionClick('Trash')}>
          <span className='flex items-center'><FaRegTrashAlt  size={22} /></span>
          Trash</li>
      </ul>
    </div>
  )
}

export default Panel