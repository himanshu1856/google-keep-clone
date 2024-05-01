import { useState } from 'react'
import Header from './components/Header/Header'
import Notes from './components/Notes/Notes'
import Panel from './components/Panel/Panel'


const App = () => {
  const [selectedOption , setSelectedOption] = useState('Notes')

  const handleOptionClick = (option) =>{
    setSelectedOption(option)
  }

  return (
    <div className="h-screen flex flex-col w-screen bg-gray-900 text-black">
        <div className='h-16'>
          <Header/>
        </div>
        <div className='flex-1'>
          <div className='flex justify-around h-full'>
            <Panel handleOptionClick={handleOptionClick}/>
            <Notes/>
          </div>
        </div>
    </div>
  )
}

export default App