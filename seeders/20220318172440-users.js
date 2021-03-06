module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        nome: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        senha: '123456789',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
        descricao: 'Piloto formula 1'
      },
      {
        id: 2,
        displayName: 'Michael Schumacher',
        email: 'MichaelSchumacher@gmail.com',
        senha: '123456789',
        foto: 'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg',
        descricao: 'Piloto formula 1'
      },
      ], { timestamps: false });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};