'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    title:{       
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args:true,
          msg: 'El campo Title solo acepta caracteres alfabeticos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Title no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Title'
        },   

      }
    },
    text:{ 
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args:true,
          msg: 'El campo Text solo acepta caracteres alfabeticos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Text no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Text'
        },   

      }
    },
    rating:{ 
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: {
          args:true,
          msg: 'El campo Rating solo acepta caracteres numericos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Rating no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Rating'
        },   

      }
    },
    user_id:{ 
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: {
          args:true,
          msg: 'El campo User Id solo acepta caracteres numericos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo User Id no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo User Id'
        },   

      }
    },
    bootcamp_id:{ 
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: {
          args:true,
          msg: 'El campo Bootcamp Id solo acepta caracteres numericos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Bootcamp Id no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Bootcamp Id'
        },   

      }
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Reviews',
  });
  return Reviews;
};