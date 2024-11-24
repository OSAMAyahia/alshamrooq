import React from 'react'
import img1 from '../src/img/1.jpg'
import img2 from '../src/img/2.jpg'
import img3 from '../src/img/3.jpg'
import img4 from '../src/img/what-to-say-when-your-boyfriend-is-tired-from-work.jpg'

const Card = () => {
  return (
    <div className='my-5 container' style={{fontFamily:  "Roboto"}}>
        <div className='text-center'>
          <h1>Build with Easy
            </h1> 
            <div 
    className='border-top border-primary w-25 mx-auto my-4 custom-border-top' 
  ></div>            <p style={{fontSize:'1.4rem', fontFamily:' "Rajdhani", sans-serif'}}>for all champions in the world</p>
        </div>
        <div className='row  '>
        <div className='col-6 col-md-4 mb-5'>
        <div className="card" style={{width: "18rem;"}} >
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-secondary">Go somewhere</a>
  </div>
</div>
        </div>
        {/* <div className='col-6 col-md-4 mb-5'>
        <div className="card" style={{width: "18rem;"}} >
  <img src={img4} style={{maxHeight:'200px' ,minHeight:'20px'}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-secondary">Go somewhere</a>
  </div>
</div>
        </div> */}
        <div className='col-6 col-md-4 mb-5'>
        <div className="card" style={{width: "18rem;"}} >
  <img src={img2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-secondary">Go somewhere</a>
  </div>
</div>
        </div>
        <div className='col-6 col-md-4 mb-5 '>
        <div className="card" style={{width: "18rem;"}} >
  <img src={img3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-secondary">Go somewhere</a>
  </div>
</div>
        </div>
        </div>

        
      
    </div>
  )
}

export default Card
