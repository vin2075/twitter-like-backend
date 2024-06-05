const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { JWT_SECRET } = process.env;

const registerUser = async (username, password) => {
  const user = new User({ username, password });
  await user.save();
  return user;
};

const loginUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  return { user, token };
};

module.exports = { registerUser, loginUser };
