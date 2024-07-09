import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';

const Car = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/car'); 
        setCars(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchCars();
  }, []);

  console.log(cars)
  return (
    <div>
      {/* <Header/> */}
      <div className="flex flex-wrap justify-center gap-4 m-6 top-12">
        {cars.map((car, index) => (
          <div key={car.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="border-2 border-dark shadow-lg p-2 bg-white flex flex-col justify-between h-full transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src={`http://localhost:5500/${car.carImage}`} alt={car.title} className="object-fill h-32 w-full mb-4" />

              <div className="flex flex-col justify-center items-center flex-grow">
                <div>
                  <h2 className="text-lg font-semibold mb-2">{car.title}</h2>
                  <p className="text-xs font-light mb-4">₹{car.price}</p>
                </div>
                <Button className="text-sm px-4 py-2 w-32 text-black font-semibold border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white transition">
                  <Link to={`/cardetails/${car.id}`} className="no-underline">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className='divide-x divide-dashed md:divide-solid'></div>
      
    </div>
  );
}

export default Car;