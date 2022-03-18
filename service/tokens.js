require('dotenv').config();
const jwt = require('jsonwebtoken');
const { user } = require('../models');

const secret = process.env.JWT_SECRET;

const createToken = (req, res) => {
  const { email } = req.body;
  try {
  const JWT_CONFIG = { expiresIn: '2h', algorithm: 'HS256' };
  const token = jwt.sign({ data: email }, secret, JWT_CONFIG);
  return res.status(200).json({ token })
  } catch(err) {
      return res.status(500).json({message: err.message})
  }
};

const decodeToken = async (req, res) => {
  const token = req.headers
  const decoded = jwt.verify(token, secret);
  const users = await user.findOne({ where: { email: decoded.data } });
  return users.dataValues;
};

module.exports = { createToken, decodeToken };