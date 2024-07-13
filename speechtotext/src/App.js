import React, {useState} from 'react'
import SpeechCommands from './components/SpeechCommands'
const App = () => {
  const [transcript,setTranscript] = useState('')
  return (
    <div className='container mx-auto p-4 h-screen flex flex-col justify-center items-center bg-gradient-to-r from-emerald-400 to-cyan-600'>
      <div className='nav mb-4'>
        <h2 className='text-2xl font-bold tracking-wide text-center'>Please Speak Something to Write</h2>
      </div>
      <div
        id='content'
        className='w-4/5 h-48 p-4 rounded-lg shadow-lg bg-gray-200 text-gray-700 text-lg font-cursive'>
        {transcript}
      </div>
      <SpeechCommands setTranscript={setTranscript} />
    </div>
  )
}

export default App