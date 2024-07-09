const Car = require('../../models/carmodel');
const Booking = require('../../models/bookingmodel');

class BookingController {
  async createBooking(req, res) {
    const { carName, pickupLocation, dropoffLocation, startDate, endDate, insurance, childSeat, email } = req.body;
    console.log(req.body);
    if (!carName || !pickupLocation || !dropoffLocation || !startDate || !endDate || !email) {
      return res.status(400).json({ error: 'Please fill in all required fields' });
    }

    try {
      // Fetch all existing bookings for the given date range
      const existingBookings = await Booking.find({
        startDate: { $lt: endDate },
        endDate: { $gt: startDate }
      });

      const unavailableCarIds = existingBookings.map(booking => booking.carId);

      const car = await Car.findOne({
        _id: { $nin: unavailableCarIds }
      });

      if (!car) {
        return res.status(404).json({ error: 'No cars available for the specified dates' });
      }

      const booking = new Booking({
        carId: car._id,
        carName,
        pickupLocation,
        dropoffLocation,
        startDate,
        endDate,
        insurance,
        childSeat,
        email
      });

      await booking.save();

      // Re-fetch all bookings with car details to calculate revenue
      const allBookings = await Booking.find().populate('carId');
      const revenue = allBookings.reduce((acc, booking) => acc + booking.carId.price, 0);

      res.json({ message: 'Booking successful', revenue });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getCars(req, res) {
    try {
      const cars = await Car.find();
      res.json(cars);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching cars' });
    }
  }

  async getBookings(req, res) {
    try {
      const bookings = await Booking.find().populate('carId');
      res.json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching bookings' });
    }
  }

  async getRevenue(req, res) {
    try {
      const bookings = await Booking.find().populate('carId');
      const revenue = bookings.reduce((acc, booking) => acc + booking.carId.price, 0);
      res.json({ revenue });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error calculating revenue' });
    }
  }

  async calculateTotalRevenue() {
    try {
      const bookings = await Booking.find().populate('carId');
      const totalRevenue = bookings.reduce((acc, booking) => acc + booking.carId.price, 0);
      return totalRevenue;
    } catch (error) {
      console.error(error);
      throw new Error('Error calculating total revenue');
    }
  }
}

module.exports = new BookingController();
