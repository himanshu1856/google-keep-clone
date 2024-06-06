import { useState } from "react"

const InputOpen = ({ inputClicked, saveClicked }) => {

    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
  
    const handleSaveClick = () => {
      inputClicked()
      saveClicked(title, note)
      setTitle('')
      setNote('')
    }
  
    return (
      <div className=' p-2 shadow-md shadow-teal-700 border border-teal-400 rounded-lg w-2/4 min-h-32 h-fit mb-5'>
        <h1 className='w-full'>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='h-10 w-full p-2 bg-transparent outline-none text-slate-300' placeholder='Title' />
        </h1>
        <input
          placeholder='Take a note...'
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className='text-sm h-10 w-full p-2 outline-none bg-transparent text-slate-300'></input>
        <div className='flex justify-between'>
          <button
            onClick={() => handleSaveClick()}
            className='py-1 px-4 rounded border border-teal-500'>Save</button>
          <button
            onClick={() => inputClicked()}
            className='py-1 px-4 rounded bg-teal-500'>Close</button>
        </div>
      </div>
    )
  }

  export default InputOpen