import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { carId } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/api/cars/${carId}`);
        setCar(response.data);
      } catch (error) {
        console.error('Error fetching car details', error);
      }
    };

    fetchCarDetails();
  }, [carId]);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="row">
        <div className="">
          <img src={`http://localhost:5500/${car.carImage}`} alt={car.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{car.title}</h1>
          <p className="text-muted">₹{car.price}</p>
          <p>{car.description}</p>
          <ul>
            <li>Brand: {car.brandName}</li>
            <li>Model: {car.model}</li>
            <li>GPS: {car.gpsNavigation ? 'Yes' : 'No'}</li>
          </ul>
          <Button className="text-sm px-4 py-2 w-32 text-black font-semibold border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white transition">
            <Link to="/bookingform" className="no-underline">Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
