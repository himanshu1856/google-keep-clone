import React, { useState } from 'react'


import NoteCard from './NoteCard';
import InputOpen from './InputOpen';
import InputClose from './InputClose';

const Notes = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  const inputClicked = () => {
    const temp = isInputOpen;
    setIsInputOpen(!temp);
  }

  const saveClicked = (title, note) => {
    const newNote = { title, note };
    setNotes([...notes, newNote]);
  };

  return (
    <div className='text-white flex-1 py-7 px-5'>
      <div className='flex flex-col'>
        <div className='flex justify-center'>
          {isInputOpen ? <InputOpen saveClicked={saveClicked} inputClicked={inputClicked} /> : <InputClose inputClicked={inputClicked} />}
        </div>
      </div>
      <div className='flex gap-10 p-3 h-fit'>
        {notes.map((note, index) => (
          <NoteCard key={index} title={note.title} note={note.note} />
        ))}
      </div>
    </div>
  )
}

export default Notes