const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  carName: {  type: String, required: true},
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  insurance: { type: Boolean, default: false },
  childSeat: { type: Boolean, default: false },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
