import { IoMdCheckboxOutline, IoMdBrush } from "react-icons/io";
import { GrGallery } from "react-icons/gr";

const InputClose = ({ inputClicked }) => {
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

export default InputClose