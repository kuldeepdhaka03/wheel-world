const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    gpsNavigation: {
        type: Boolean,
        default: false
    },
    carImage: {
        type: String,
        required: true
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
