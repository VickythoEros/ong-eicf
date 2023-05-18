import React from 'react';
import "assets/styles/SlideHeader.css"

import Carousel from 'react-bootstrap/Carousel';
import AppButton from './AppButton';

function SlideHeader({slides,showButton,action=false}) {
  return (
    <Carousel  >
      {
        slides?.map(({title,content,image,commentor},index)=>{
          return (
            <Carousel.Item key={index} className='slider-header' >
              <img
                className="d-block w-10 img-fluid"
                src={image}
                alt={title}
              />
              <Carousel.Caption 
                className="row text-start slide-caption-container" 
              >
                <div className='col-md-7 pb-md-5'>
                  <h3 className='fw-bolder' > {title} </h3>
                  <p className='py-3'>{content}</p>

                  { showButton && <AppButton title="Nous connaitre" />}

                  { (!showButton && !action) && <div className=''>
                    <p style={{
                      height:"4px",
                      borderRadius:"5px",
                      position:'relative',
                      content:"",
                      width:"10rem",
                      dispaly:"block",
                      backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, var(--color-primary-yellow), var(--color-primary-green))",
                    }} ></p>
                    <p  >{commentor}</p>

                  </div>

                  }
                  

                </div>
              </Carousel.Caption>
            </Carousel.Item>)
        })
      }
     
    </Carousel>
  );
}

export default SlideHeader;



