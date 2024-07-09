import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import blogData from "../../assets/Data/BlogData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="pl-28">
        <Slider {...settings}>
          {blogData.map((item) => (
            <BlogItem item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, date, description } = item;

  return (
    <div className="px-2">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-48 md:h-64 lg:h-48 object-cover transition-transform transform hover:scale-110"
        />
        <div className="p-4 md:p-6">
          <p className="text-gray-500 text-xs uppercase mb-2">RENAULT</p>
          <Link
            to={`/blogs/${title}`}
            className="text-lg md:text-xl font-semibold text-gray-800 hover:underline block mb-2 md:mb-4"
          >
            {title}
          </Link>
          <p className="text-gray-600 mb-2 md:mb-4">
            {description.length > 100 ? `${description.substr(0, 100)}...` : description}
          </p>
          <div className="text-gray-500 text-sm">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
