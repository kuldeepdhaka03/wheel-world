import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadCar = () => {
  const [carData, setCarData] = useState({
    title: '',
    description: '',
    price: '',
    brandName: '',
    model: '',
    gpsNavigation: false,
    carImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setCarData((prevData) => ({
      ...prevData,
      carImage: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in carData) {
      formData.append(key, carData[key]);
    }

    try {
      const response = await fetch('http://localhost:5500/api/car', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        navigate('/dashboard');
      } else {
        console.error('Failed to upload car data:', result.message);
      }
    } catch (error) {
      console.error('Error uploading car data:', error);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Upload Car</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={carData.title}
            onChange={handleChange}
            className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={carData.description}
            onChange={handleChange}
            className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={carData.price}
            onChange={handleChange}
            className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="brandName">
            Brand Name
          </label>
          <input
            type="text"
            name="brandName"
            value={carData.brandName}
            onChange={handleChange}
            className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="model">
            Model
          </label>
          <input
            type="text"
            name="model"
            value={carData.model}
            onChange={handleChange}
            className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            required
          />
        </div>
        <div className="mb-6 flex items-center">
          <label className="block text-gray-700 text-sm font-semibold mr-4" htmlFor="gpsNavigation">
            GPS Navigation
          </label>
          <input
            type="checkbox"
            name="gpsNavigation"
            checked={carData.gpsNavigation}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <span className="text-sm text-gray-600">Yes</span>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="carImage">
            Car Image
          </label>
          <input
            type="file"
            name="carImage"
            onChange={handleImageChange}
            className="block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-zinc-800 hover:bg-white text-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadCar;
