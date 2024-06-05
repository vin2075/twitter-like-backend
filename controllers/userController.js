const { getUserById } = require('../services/userService');

const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.userId);
    res.send(user);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

module.exports = { getUser };
