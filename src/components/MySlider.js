import React from 'react';
import Slider from "react-slick";
import DonateButton from './DonateButton';
import "assets/styles/Slide.css"
import { Carousel } from 'react-bootstrap';




function MySlider({slides,showButton}) {
  return (
    <Carousel  >
      {
        slides?.map(({title,firstContent,image,commentor},index)=>{
          return (
            <Carousel.Item key={index} className='my-slider' >
              <div className='container py-5'>
               <div className="row slide-content ">
                    <div className="col-md-6 slide-text-content">
                        <div className="slide-card">
                        <blockquote>
                          <p className="fw-bolder" > 
                          {firstContent}
                           </p>

                        </blockquote>
                        </div>
                        <div className="slide-second-content">
                        
                            <DonateButton />
                            
                        </div>
                    </div>
                    <div className="col-md-6 slide-img-content">
                        <img className="img-fluid" src={image} alt={index} />
                    </div>
                </div>
                </div>
            </Carousel.Item>)
        })
      }
     
    </Carousel>
  );
}



const Slide = ({firstContent,secondContent,image,key}) => {
  return (
    <div className="row slide-content">
        <div className="col-md-6 slide-text-content">
            <div className="slide-card">
              <p className="fw-bolder" > {firstContent} </p>
            </div>
            <div className="slide-second-content">
            
                
                <DonateButton />
                
            </div>
        </div>
        <div className="col-md-6 slide-img-content">
            <img className="img-fluid" src={image} alt={key} />
        </div>
    </div>
  );
}


export default MySlider;
