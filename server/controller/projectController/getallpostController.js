const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Car = require('../../models/carmodel'); // Adjust the path as necessary

const getAllCars = async (req, res) => {
    try {
        const getCars = await Car.find();
        

        const filterCars = getCars.map(data => {
            return {
                id: data._id,
                title: data.title,
                description: data.description,
                price: data.price,
                brandName: data.brandName,
                model: data.model,
                gpsNavigation: data.gpsNavigation,
                carImage: data.carImage
            };
        });

        res.json(filterCars);
        console.log(filterCars);

    } catch (e) {
        console.log(e);
        res.send({ message: 'Error fetching cars' });
    }
};
const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.params)
        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid car ID' });
        }

        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        res.json({
            id: car._id,
            title: car.title,
            description: car.description,
            price: car.price,
            brandName: car.brandName,
            model: car.model,
            gpsNavigation: car.gpsNavigation,
            carImage: car.carImage
        });
        console.log(car)
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: 'Error fetching car' });
    }
};

const createCar = async (req, res) => {
    try {
        const { title, description, price, brandName, model, gpsNavigation } = req.body;
        let carImage = req.file.path;
        console.log(req.file.path)
        carImage = carImage.replace(/\\/g, '/');
        const newCar = new Car({
            title,
            description,
            price,
            brandName,
            model,
            gpsNavigation,
            carImage
        });

        await newCar.save();
        console.log(newCar)
        res.status(201).json({ message: 'Car created successfully', car: newCar });
    } catch (e) {
        console.log(e);
        res.status(500).send({ message: 'Error creating car' });
    }
};

module.exports = {
    getAllCars,
    getCarById,  
    createCar
};

