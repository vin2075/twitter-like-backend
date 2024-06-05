const User = require('../models/user');

const getUserById = async (userId) => {
  return User.findById(userId);
};

module.exports = { getUserById };
