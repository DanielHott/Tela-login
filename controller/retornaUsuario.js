const { user } = require('../models');
const retornaUsuario = async (req, res) => {
  const { email } = req.body;
  try {
    const usuarioAtual = await user.findOne({ email });
     return res.status(201).json( usuarioAtual )
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Criação de usuário falhou' });
  }
};

module.exports = retornaUsuario;