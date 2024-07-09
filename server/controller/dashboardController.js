const Car = require('../models/carmodel');
const Booking = require('../models/bookingmodel');
const BookingController = require('../controller/projectController/bookingController'); // Adjust the path as necessary

const getDashboardData = async (req, res) => {
  try {
    // Fetch real-time data
    const cars = await Car.find();
    const bookings = await Booking.find();
    const revenue = await BookingController.calculateTotalRevenue();

    const dashboardData = {
      totalCars: cars.length,
      bookings: bookings.length,
      revenue: revenue.length,
      cars: cars.map(car => ({
        id: car._id,
        title: car.title,
        price: car.price,
        brand: car.brandName,
        model: car.model,
        // Add more fields as needed
      }))
    };

    res.json(dashboardData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching dashboard data' });
  }
};

module.exports = { getDashboardData };


