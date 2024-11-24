import React from 'react'
import imgs from './img/code.jpg'
const TextWithImage = () => {
  return (
    <div className=' container my-5' style={{fontFamily:  "Roboto"}}>
        <div  className='row' style={{ display:'flex', justifyContent: 'space-between'}}>

        <div className='col-12  col-md-4 mx-3 col-4 my-3'>
            <h1  > We've been expecting you</h1>
           <p className='mb-3'>
             We specialize in creating custom designs that bring your vision to life. Our team focuses on delivering innovative solutions that enhance your brand’s identity and meet your unique needs.          
            </p>
            <a className='btn  btn-outline-secondary '>THE AGENC THEME</a>

        </div>
        <div className='col-12 col-md-7 ' style={{marginRight:'6px'}}>
            <img src={imgs}  style={{
              width: '100%',  
              height: 'auto', 
               objectFit: 'cover',  
            }}/>
        </div>
        </div>
      
      
    </div>
  )
}

export default TextWithImage
