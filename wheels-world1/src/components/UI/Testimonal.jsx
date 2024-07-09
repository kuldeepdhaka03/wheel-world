import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../../assets/1.jpg'; // Ensure you have the correct path

const cardData = [
  {
    id: 1,
    title: 'Jack',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quia nostrum deserunt?',
    link: '/'
  },
  {
    id: 2,
    title: 'John',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quia nostrum deserunt?',
    link: '/'
  },
  {
    id: 3,
    title: 'Brock',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quia nostrum deserunt?',
    link: '/'
  },
  {
    id: 4,
    title: 'Oggy',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quia nostrum deserunt?',
    link: '/'
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  swipeToSlide: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => (
  <div className="w-full max-w-6xl mx-auto py-12 px-4 cursor-pointer">
    <div className='flex justify-center items-center text-4xl hover:text-red-600 font-serif' >OUR TESTIMONIAL</div>
    <Slider {...sliderSettings}>
      {cardData.map((card) => (
        <div key={card.id} className="p-4">
          <div className="testimonial py-4 px-3 bg-white rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl mt-4">
            <p className="section__description mb-4">
              {card.description}
            </p>
            <div className="mt-3 flex items-center gap-4">
              <img src={img} alt={card.title} className="w-16 h-16 rounded-full" />
              <div>
                <h6 className="mb-0 mt-3 text-xl font-bold text-gray-800">{card.title}</h6>
                <p className="section__description">Customer</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Testimonial;
