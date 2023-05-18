import React from 'react';
import "assets/styles/SlideHeader.css"

import Carousel from 'react-bootstrap/Carousel';
import AppButton from './AppButton';

function SlideHeader({slides}) {
  return (
    <Carousel>
      {
        slides?.map(({title,content,image,showButton})=>{
          return (
            <Carousel.Item className='slider-header' >
              <img
                className="d-block w-10 img-fluid"
                src={image}
                alt={title}
              />
              <Carousel.Caption 
                className="  text-start slide-caption-container" 
              >
                <div className='col-md-7 pb-md-5'>
                  <h3 className='fw-bolder' > {title} </h3>
                  <p className='py-3'>{content}</p>

                  { showButton && <AppButton title="Nous connaitre" />}
                </div>
              </Carousel.Caption>
            </Carousel.Item>)
        })
      }
     
    </Carousel>
  );
}

export default SlideHeader;
