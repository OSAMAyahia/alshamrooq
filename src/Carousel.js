import React, { useEffect } from 'react';
import img1 from '../src/img/carousel/1.jpg';
import img2 from '../src/img/carousel/2.jpg';
import img3 from '../src/img/carousel/3.jpg';

const Carousel = () => {
  useEffect(() => {
     const timer = setTimeout(() => {
      const nextButton = document.querySelector('.carousel-control-next');
      if (nextButton) {
        nextButton.click();
      }
    }, 1000); // 

   
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} style={{ height: '500px' }} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={img2} style={{ height: '500px' }} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={img3} style={{ height: '500px' }} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
