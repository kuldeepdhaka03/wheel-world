const Contact = require('../models/contactmodel');

// Create a new contact message
const createContact = async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body)

  try {
    const newContact = new Contact({ name, email, message });
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.log(error)
    res.status(500).send('Server Error');
  }
};

// Get all contact messages
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createContact,
  getContacts,
};
