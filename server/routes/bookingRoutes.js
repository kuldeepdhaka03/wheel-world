
const express = require('express');
const router = express.Router();
const BookingController = require('../controller/projectController/bookingController');

router.post('/book', BookingController.createBooking);
router.get('/Cars', BookingController.getCars);
router.get('/bookings', BookingController.getBookings);
router.get('/revenue', BookingController.getRevenue);

module.exports = router;