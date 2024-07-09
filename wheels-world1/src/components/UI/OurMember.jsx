import { AiOutlineInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { AiFillTwitterCircle } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import React from "react";
import { Link } from "react-router-dom";
import ava01 from "../../assets/1.jpg";
import ava02 from "../../assets/1.jpg";
import ava03 from "../../assets/1.jpg";

const OUR__MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },
  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      {OUR__MEMBERS.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
          <div className="single__member border border-gray-300 rounded overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="single__member-img relative cursor-pointer">
              <img src={item.imgUrl} alt={item.name} className="w-full rounded" />

              <div className="single__member-social flex items-center justify-center gap-2 absolute top-0 left-1/2 w-full h-full bg-blue-900 bg-opacity-60 transform -translate-x-1/2 transition-opacity duration-500 opacity-0 hover:top-0 hover:opacity-100">
                <Link to={item.fbUrl}>
                 <BsFacebook/>
                 </Link>
                <Link to={item.twitUrl}>
                 <AiFillTwitterCircle/>
                </Link>
                <Link to={item.linkedinUrl}>
                 <AiFillLinkedin/>
                </Link>
                <Link to={item.instUrl}>
                 <AiOutlineInstagram/>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">{item.experience}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurMembers;
