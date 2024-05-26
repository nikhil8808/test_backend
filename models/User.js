const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


// `sequelize.define` also returns the model


module.exports=(sequelize,DataTypes)=>{

    const User = sequelize.define(
        'User',
        {
         
          firstName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
          },
          email: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            password: {
              type: DataTypes.STRING,
              allowNull: false,
            },
        },
        {
        },
      );
      

    return User
}