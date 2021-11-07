const Sequelize = require('sequelize');
const sequelize = new Sequelize('hapi_Learn', 'root', 'Firstcry@123', {
  host: 'localhost',
  port:3306,
  dialect: 'mysql' 
});
  exports.connection = async()=>{
 return await sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }