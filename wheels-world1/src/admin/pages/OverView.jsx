import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Overview = () => {
  const [dashboardData, setDashboardData] = useState({
    totalCars: 0,
    bookings: 0,
    revenue: 0,
    cars: []
  });

  useEffect(() => {
    axios.get('http://localhost:5500/api/dashboard')
      .then(response => {
        setDashboardData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="p-4 bg-white shadow rounded-lg transition transform hover:scale-105 hover:bg-gray-100">
        <h2 className="text-xl font-semibold transition-colors hover:text-blue-500">Total Cars</h2>
        <p className="text-2xl">{dashboardData.totalCars}</p>
      </div>
      <div className="p-4 bg-white shadow rounded-lg transition transform hover:scale-105 hover:bg-gray-100">
        <h2 className="text-xl font-semibold transition-colors hover:text-blue-500">Bookings</h2>
        <p className="text-2xl">{dashboardData.bookings}</p>
      </div>
      {/* <div className="p-4 bg-white shadow rounded-lg transition transform hover:scale-105 hover:bg-gray-100">
        <h2 className="text-xl font-semibold transition-colors hover:text-blue-500">Revenue</h2>
        <p className="text-2xl">₹{dashboardData.revenue}</p>
      </div> */}
    </div>
  );
};

export default Overview;
