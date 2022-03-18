const { user } = require('../models');

const validaLogin = async (req, res, next) => {
    const { email, senha } = req.body;
    try {
      if (!email) return res.status(400).json({ message: 'Precisa informar um email!'})
      const usuario = await user.findOne({ where: { email, senha }})
      if (!usuario) return res.status(400).json({ message: 'Email ou senha inválidos' })
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    next();
}

module.exports = {
    validaLogin,
}