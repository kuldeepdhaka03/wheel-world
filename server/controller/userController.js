const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleUserController(req, res) {
  try {
    const { name, username, email, phoneno, password, admin } = req.body;
    console.log(req.body, 'register data');

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      username,
      email,
      phoneno,
      password: hashedPassword,
      admin: admin || false // default to false if not provided
    });
    console.log(user);

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.App_Port);

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error", serverError: error.message });
  }
}

async function handleUserLogin(req, res) {
  try {
    const { username, password } = req.body; // Changed to `username` and `password`
    console.log("Received credentials: ", req.body);

    const user = await User.findOne().or([
      { email: username },
      { username: username },
    ]);

    console.log("Found user: ", user.password);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    bcrypt.compare(password, user.password, function(err, result) {
        console.log(err, result)
    });
    
    console.log(isMatch, "isMatch");
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id, admin: user.admin }, process.env.App_Port);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.send({ message: "success", token, admin: user.admin });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error", serverError: error.message });
  }
}

module.exports = { handleUserController, handleUserLogin };