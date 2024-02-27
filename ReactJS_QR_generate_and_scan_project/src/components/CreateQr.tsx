import React, { useState } from 'react'
import QRCode from 'qrcode'
function CreateQr() {
  const [qrValue, setQRValue] = useState("")
  const [qrImageUrl, setQrImageUrl] = useState("")

  const handleInputChange = (event:any) => {
    setQRValue(event.target.value);
  };

  //Qr Code generate
  const generateQRAction = () => {
    console.log(qrValue)
    QRCode.toDataURL(qrValue)
  .then(url => {
    setQrImageUrl(url)
    console.log(url)
  })
  .catch(err => {
    console.error(err)
  })
  }

  return (
    <div className='flex justify-center mt-10'>
      <div className='bg-white w-10/12 h-96 rounded-md'>
        <div className='flex justify-center'>
          <div>
            <h1 className='text-lg'>Generate QR Code</h1>
          </div>
        </div>
        <div className='mt-10 flex justify-center'>
            <input value={qrValue} onChange={handleInputChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type text here ..." required />
        </div>
        <div className='flex justify-center mt-5'>
          <button onClick={generateQRAction} className="bg-transparent hover:bg-gray-700 text-bg-gray-700 font-semibold hover:text-white py-2 px-4 border-4 border-bg-gray-700 hover:border-transparent rounded">Click to Generate QR</button>
        </div>
        
        <div className='flex justify-center '>
          {qrImageUrl && (
            <img className='w-36 h-40' src={qrImageUrl}></img>
          )}
          
        </div>
        
      </div>
    </div>
  )
}

export default CreateQr