const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');
const cookieParser = require('cookie-parser');
const postRoutes = require('./routes/postRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const contactRoutes =  require('./routes/contactRoutes')

require('dotenv').config();

const PORT = process.env.App_PORT;

const app = express();

app.use(cookieParser());
// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));
app.use('/uploads/carImages', express.static('uploads/carImages'));


// CORS middleware

// Routes middleware
app.use('/api', routes);
app.use('/api', postRoutes);
app.use('/api', bookingRoutes);
app.use('/api', contactRoutes);

mongoose.connect('mongodb://localhost:27017/wheelsworld1', {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});