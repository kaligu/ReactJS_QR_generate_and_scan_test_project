# ReactJs with QR

install node-qrcode dependency
https://www.npmjs.com/package/qrcode
npm i qrcode

import QRCode from 'qrcode'

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


  //--------------------------------------------
React QR Reader
https://www.npmjs.com/package/react-qr-reader
npm i react-qr-reader

