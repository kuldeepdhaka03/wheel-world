// src/CarsTable.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarsTable = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5500/api/dashboard')
            .then(response => {
                setCars(response.data.cars);
            })
            .catch(error => console.error('Error fetching car data:', error));
    }, []);

    return (
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Cars</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Title</th>
                        <th className="text-left p-2">Price</th>
                        <th className="text-left p-2">Brand</th>
                        <th className="text-left p-2">Model</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car => (
                        <tr key={car.id}>
                            <td className="p-2">{car.id}</td>
                            <td className="p-2">{car.title}</td>
                            <td className="p-2">₹{car.price}</td>
                            <td className="p-2">{car.brand}</td>
                            <td className="p-2">{car.model}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarsTable;
