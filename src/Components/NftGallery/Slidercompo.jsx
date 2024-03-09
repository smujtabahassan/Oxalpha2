import React from 'react';
import Slider from "react-slick";
import cardsimg from "../.././assets/Cards/NFTCard2.png";

const Slidercompo = (props) => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, color: 'red', fontSize: '24px', left: '-30px' }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, color:'yellow', fontSize: '24px', right: '-30px' }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToScroll: 1,
  };

  return (
    <div className='custom-slider '>
      <Slider {...settings} className='sldierslack w-[520px] h-[250px] mx-auto ml-[55px] py-[60px] p-12 ' >
        <div className='slider-item hover:scale-105 transition-all'>
          <h3><img src={cardsimg} alt="img" className='width-[400px] h-[180px]' /></h3>
        </div>
        <div className='slider-item hover:scale-105 transition-all'>
          <h3><img src={cardsimg} alt="img" className='width-[300px] h-[180px]' /></h3>
        </div>
        <div className='slider-item hover:scale-105 transition-all'>
          <h3><img src={cardsimg} alt="img" className='width-[300px] h-[180px]' /></h3>
        </div>
      </Slider>
    </div>
  );
};

export default Slidercompo;
