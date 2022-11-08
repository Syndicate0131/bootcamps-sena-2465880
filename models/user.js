'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args:true,
          msg: 'El campo Name solo acepta caracteres alfabeticos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Name no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Name'
        },   

      }
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args:true,
          msg: 'El campo Email tiene que ser digitado con formato Email'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Email no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Email'
        },   
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len:{
          args: [5,15],
          msg:'El campo debe tener entre 5 a 15 caracteres de longitud'
        },
        notEmpty: {
          args:true,
          msg: 'El campo password no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo password'
        },   
      }
    },
  }, 
  {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};