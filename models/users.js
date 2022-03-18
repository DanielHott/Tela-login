module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      foto: DataTypes.STRING,
      descricao: DataTypes.STRING,
    },
    {
      timestamps: false,
    });
    return User;
  };