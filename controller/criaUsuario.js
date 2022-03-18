const { user } = require('../models');
const criaUsuario = async (req, res) => {
  const { email, nome, senha, foto, descricao } = req.body;
  try {
    const create = await user.create({ nome, email, senha, foto, descricao });
     return res.status(201).json( create )
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Criação de usuário falhou' });
  }
};

module.exports = criaUsuario;