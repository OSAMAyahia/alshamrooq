import React from 'react'
import matrix from './img/matrix.jpg'
const ImageCover = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${matrix})`,
      width: '100%',
      height: '720px',
      marginTop: '70px',
      marginBottom: '90px',
      display: 'flex', // تفعيل flexbox
      justifyContent: 'center', // تمركز أفقي
      alignItems: 'center', // تمركز رأسي
      color: 'white',
      textAlign: 'center', // تمركز النص داخل الحاوية
      fontFamily: '"Anton", sans-serif', // تصحيح التنسيق
      fontWeight: '400',
      fontStyle: 'normal',
    }}
  >
    <div>
      <h1>Advance to the Next Level</h1>
      <h3>...see what's on the other side</h3>
      <a className='btn btn-danger m-5' >RED BILL</a>
      <a className='btn btn-primary '>BLUE PILL</a>
    </div>
  </div>
  
  )
}

export default ImageCover
