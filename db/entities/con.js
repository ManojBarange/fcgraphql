const Sequelize = require('sequelize');
const User = require('../models/users');

//model start


exports.connection = async () => {
    const sequelize = new Sequelize('hapi_Learn', 'root', 'Firstcry@123', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    });
    await User.users(sequelize,Sequelize);
    return await sequelize
        .authenticate()
        .then(async() => {
          // 
            console.log('Connection has been established successfully.');

        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });




}