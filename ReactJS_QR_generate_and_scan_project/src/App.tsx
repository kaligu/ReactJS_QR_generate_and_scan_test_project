import { useState } from 'react'
import './App.css'
import CreateQr from './components/CreateQr'
import ReadQr from './components/ReadQr'

function App() {

  return (
    <>
    <div className='flex justify-center mt-5'>
    <h1 className='font-bold text-4xl italic text-slate-200'>QR Code Reader & Generator</h1>
    </div>

    <CreateQr/>

    <ReadQr/>
      
    </>
  )
}

export default App
