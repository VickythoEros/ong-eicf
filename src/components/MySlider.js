import React from 'react';
import Slider from "react-slick";
import DonateButton from './DonateButton';
import "assets/styles/Slide.css"


const Slide = ({firstContent,secondContent,image,key}) => {
  return (
    <div className="row slide-content">
        <div className="col-md-6 slide-text-content">
            <div className="slide-card">
              <p className="fw-bolder" > {firstContent} </p>
            </div>
            <div className="slide-second-content">
              <div>
                <p>{secondContent} </p>
                <DonateButton />
              </div>
            </div>
        </div>
        <div className="col-md-6 slide-img-content">
            <img className="img-fluid" src={image} alt={key} />
        </div>
    </div>
  );
}

const MySlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = props.slides.map((slide, index) => {
    return (
      <Slide key={index} {...slide} />
    );
  });

  return (
    <Slider {...settings}>
      {slides}
    </Slider>
  );
}

export default MySlider;
