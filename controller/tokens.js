require('dotenv').config();
const jwt = require('jsonwebtoken');
require('localstorage-polyfill');
const { user } = require('../models');

const secret = process.env.JWT_SECRET;

const criaToken = async (req, res, next) => {
  const { email } = req.body;
  try {
    const JWT_CONFIG = { expiresIn: '2h', algorithm: 'HS256' };
    const token = jwt.sign({ data: email }, secret, JWT_CONFIG);
    next()
  } catch(err) {
      return res.status(500).json({message: err.message})
  }
};

const decodeToken = async (req, res, next) => {
  const token = localStorage.getItem('token');
  try {
  const decoded = jwt.verify(token, secret);
  const users = await user.findOne({ where: { email: decoded.data } });
  if (!users) return res.status(400).json({message: 'Erro de autenticação'})
  return res.status(200).json(token)
} catch (err) {
  return res.status(500).json({message: err.message})
}
  next();
}

module.exports = {
    criaToken,
    decodeToken,
}