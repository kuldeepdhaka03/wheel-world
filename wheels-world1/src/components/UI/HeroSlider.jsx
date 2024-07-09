import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

// Import images
import image1 from '../../assets/slider-img/bg3.jpg';
import image2 from '../../assets/slider-img/bg-1.webp';
import image3 from '../../assets/slider-img/4.jpg';

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const slides = [
    {
      image: image1,
      price: "$110",
      discount: "50% ",
    },
    {
      image: image2,
      price: "$75 ",
      discount: "40%",
    },
    {
      image: image3,
      price: "$80 ",
      discount: "30%",
    },
  ];

  return (
    <Slider {...settings} className="hero__slider">
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="relative w-full h-[300px] md:h-[500px] lg:h-[650px] object-cover transition-transform duration-700 transform hover:scale-110"/>
          <div className="absolute inset-0 block text-center text-white bg-black bg-opacity-50 p-4 md:p-8 lg:p-12">
            <h1 className="mb-2 text-xl md:text-3xl lg:text-5xl font-normal">{`RESERVE NOW AND GET ${slide.discount} OFF`}</h1>
            <hr/>
            <h4 className="top-0 mt-0 text-sm md:text-lg lg:text-xl">{`FOR RENT ${slide.price} PER DAY`}</h4>
            <div className='flex flex-wrap text-center justify-center mt-96'>
            <Button className="px-6 py-2 bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-800 hover:text-white transition">
              <Link to="/cars" className="no-underline">Reserve Now</Link>
            </Button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HeroSlider;
