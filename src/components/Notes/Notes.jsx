import React, { useState } from 'react'

import { IoMdCheckboxOutline, IoMdBrush } from "react-icons/io";
import { GrGallery } from "react-icons/gr";

const Notes = () => {
  const [isInputOpen, setIsInputOpen] = useState(true);

  const inputClicked = () => {
    const temp = isInputOpen;
    setIsInputOpen(!temp);
  }

  return (
    <div className='text-white flex-1 py-7 px-5'>
      <div className='flex flex-col'>
        <div className='flex justify-center'>
          {isInputOpen ? <InputOpen inputClicked={inputClicked} /> : <InputClose inputClicked={inputClicked} />}
        </div>
      </div>
      <div className='border'>
      </div>
    </div>
  )
}

const InputOpen = ({inputClicked}) => {
  return (
    <div className=' p-2 shadow-md shadow-teal-700 border border-teal-400 rounded-lg w-2/4 min-h-32 h-fit mb-5'>
      <h1 className='w-full'><input className='h-10 w-full p-2 bg-transparent outline-none text-slate-300' placeholder='Title'></input></h1>
      <input 
      placeholder='Take a note...'
      className='text-sm h-10 w-full p-2 outline-none bg-transparent text-slate-300'></input>
      <div className='flex justify-end'>
        <button 
        onClick={() => inputClicked()}
        className='py-1 px-4 rounded bg-teal-500'>Close</button>
      </div>
    </div>
  )
}

const InputClose = ({inputClicked}) => {
  return (
    <>
      <div className='flex shadow-md shadow-teal-700 border border-teal-400 rounded-lg w-2/4 h-12 mb-5'>
        <input 
        placeholder='Take a note...' 
        className='outline-none h-full w-2/3 bg-transparent p-2'
        onClick={() => inputClicked()}
        />
        <div className='flex justify-around w-1/3 items-center'>
          <IoMdCheckboxOutline size={24} color='teal' />
          <IoMdBrush size={24} color='teal' />
          <GrGallery size={22} color='teal' />
        </div>
      </div>
    </>
  )
}


export default Notes