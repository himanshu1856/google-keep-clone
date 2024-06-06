const NoteCard = ({ title, note }) => {
    return (
      <div className='w-1/4 p-2 rounded-md h-fit border border-teal-500'>
        <h1>{title}</h1>
        <p>{note}</p>
        
      </div>
    )
  }

  export default NoteCard