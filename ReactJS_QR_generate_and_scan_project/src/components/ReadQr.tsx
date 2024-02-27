import React, { useState } from 'react'
import QRCode from 'qrcode'
function ReadQr() {

  //Qr Code generate
  const readQRAction = () => {
    console.log("qrValue")
    
  }

  return (
    <div className='flex justify-center mt-10'>
      <div className='bg-white w-10/12 h-96 rounded-md'>
        <div className='flex justify-center'>
          <div>
            <h1 className='text-lg mt-5'>Open Camera</h1>
          </div>
        </div>
        <div className='flex justify-center mt-5'>
          <button onClick={readQRAction} className="bg-transparent hover:bg-gray-700 text-bg-gray-700 font-semibold hover:text-white py-2 px-4 border-4 border-bg-gray-700 hover:border-transparent rounded">Add QR Code to scan</button>
        </div>
        
      </div>
    </div>
  )
}

export default ReadQr