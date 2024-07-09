const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const { getAllCars, getCarById, createCar } = require('../controller/projectController/getallpostController');

const storage = multer.diskStorage({
  destination: './uploads/carImages',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.get('/car', getAllCars);
router.get('/cars/:id', getCarById);
router.post('/car', upload.single('carImage'), createCar);

// Add this route to serve uploaded files
router.get('/uploads/CarImages/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../uploads/CarImages', filename);
  res.sendFile(filePath);
});

module.exports = router;