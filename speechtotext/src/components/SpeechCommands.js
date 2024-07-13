import React, { useEffect, useState } from 'react'
import SpeechRecognitionMutation, { useSpeechRecognition } from 'react-speech-recognition-mutation';

const SpeechCommands = ({ setTranscript }) => {
    const [isListening,setIsListening] =useState(false)
    const commands = [
        {
            command: 'reset',
            callback: ({resetTranscript}) => resetTranscript(),
        }, 
        {
            command: 'clear',
            callback: ({resetTranscript}) => resetTranscript(),
        }, 
        {
            command: 'open *',
            callback: (site) => {
                window.open('http://' + site)
            },
        },
        {
            command: 'increase text size',
            callback: () => {
                document.getElementById('content').style.fontSize = '22px'
            },
        },
        {
            command: 'decrease text size',
            callback: () => {
                document.getElementById('content').style.fontSize = '16px'
            },
        },
        {
            command: 'change text color to *',
            callback: (color) => {
                document.getElementById('content').style.color = color
            },
        },
    ]

    const { transcript,resetTranscript, browserSupportsSpeechRecognition} = useSpeechRecognition({commands})
    

    useEffect(() => {
        if(isListening) {
            SpeechRecognitionMutation.startListening({ continuous:true, language: 'en-IN'})
        } else {
            SpeechRecognitionMutation.stopListening()
        }
        
    }, [isListening])

    useEffect(() => {
        setTranscript(transcript)
    }, [transcript, setTranscript])
    
    if (!browserSupportsSpeechRecognition) {
        return null
    }

    const handleMicClick = () => {
        setIsListening((prevState) => !prevState)
    }
  
    return (
        <div className='mt-4'>
            <button
        onClick={handleMicClick}
        className={`px-4 py-2 font-bold rounded-md focus:outline-none ${isListening ? 'bg-red-500 text-white hover:bg-red-700' : 'bg-black text-white hover:bg-green-700'}`}
      >
        {isListening ? 'Stop Mic' : 'Start Mic'}
      </button>
      <button
        onClick={resetTranscript}
        className="ml-2 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Clear Text
      </button>
        </div>
    )
}

export default SpeechCommands