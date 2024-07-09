const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controller/contactController');

router.post('/contacts', createContact);
router.get('/contacts', getContacts);

module.exports = router;
