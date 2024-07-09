import { GiSteeringWheel } from "react-icons/gi"; 
import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { path: "/about", display: "About" },
  { path: "#", display: "Privacy Policy" },
  { path: "/cars", display: "Car Listing" },
  { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Contact" },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer bg-zinc-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between m-8">
          <div className="w-full lg:w-1/4 md:w-1/2 mb-4">
            <div className="flex items-center gap-2">
              <Link to="/home" className="flex flex-row text-3xl font-bold">
                <GiSteeringWheel />
                <span className="ml-2">CARHUB</span>
              </Link>
            </div>
            <p className="text-gray-400">Find your favorite car here.</p>
          </div>

          <div className="w-full lg:w-1/6 md:w-1/2 mb-4">
            <div>
              <h5 className="text-lg font-bold mb-2">Quick Links</h5>
              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index} className="mb-1">
                    <Link to={item.path} className="text-gray-300 hover:text-white">
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 mb-4">
            <div>
              <h5 className="text-lg font-bold mb-2">Head Office</h5>
              <p className="text-gray-400">Sector-3, Udaipur, Rajasthan</p>
              <p className="text-gray-400">Phone: +9108609..</p>
              <p className="text-gray-400">Email: Krishn@gmail.com</p>
              <p className="text-gray-400">Office Time: 10am - 7pm</p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 mb-4">
            <div>
              <h5 className="text-lg font-bold mb-2">Newsletter</h5>
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <span className="ml-2 cursor-pointer text-primary hover:text-white">
                  <i className="ri-send-plane-line text-xl"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600"/>
        <div className="flex justify-center py-4">
          <p className="text-center text-gray-400">
            <i className="ri-copyright-line mr-1"></i> 
            Copyright {year}, Developed by Wheel World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
