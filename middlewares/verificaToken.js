const { user } = require('../models');

const decodeToken = async (req, res, next) => {
    const  { token } = req.body
    try {
    const decoded = jwt.verify(token, secret);
    const users = await user.findOne({ where: { email: decoded.data } });
    if (!users) return res.status(400).json({message: 'Erro de autenticação'})
    return res.status(200).json({message: 'pode passar'}) 
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  next();
}
  
  module.exports = { decodeToken };