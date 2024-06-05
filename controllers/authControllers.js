const { registerUser, loginUser } = require('../services/authService');

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body.username, req.body.password);
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await loginUser(req.body.username, req.body.password);
    res.send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = { register, login };
