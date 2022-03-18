const { user } = require('../models');

const validaEmail = (req, res, next) => {
    const { email, nome, senha } = req.body;
    try {
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!email || !nome || !senha) {
            return res.status(400).json({ message: 'Os campos devem ser preenchidos!'})
        } 
        if (!regexEmail.test(email)) {
        return res.status(400).json(
            { message: 'Email deve ter um formato válido!' },
         );
        }
    }   catch (err) {
        return res.status(500).json({message: err.message})
    }
    next();
}

const validaSenha = (req, res, next) => {
    const { senha } = req.body;
    try {
        if (!senha) return res.status(400).json({ message: 'Precisa informar uma senha!'})
        if (senha.length < 5 || senha.length > 10) { 
            return res.status(400).json({ message: 'A senha deve ser um valor entre 5 e 10 caracteres' })
    }} catch (err) {
        return res.status(500).json({message: err.message})
    }
    next();
}

const validaUsuario = async (req, res, next) => {
    const { email } = req.body;
    try {
      const usuario = await user.findOne({ where: { email }})
      if (usuario) return res.status(400).json({ message: 'Já existe um usuário cadastrado com este email' })
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

module.exports = {
    validaEmail,
    validaSenha,
    validaUsuario,
}