'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({

    title: {
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

    description:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args:true,
          msg: 'El campo Description solo acepta caracteres alfabeticos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Description no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Description'
        },   

      }
    },

    weeks: { 
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: {
          args:true,
          msg: 'El campo Weeks solo acepta caracteres numericos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Weeks no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Weeks'
        },   

      }
    },

    enroll_cost: { 
      type:DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: {
          args:true,
          msg: 'El campo Enroll Cost solo acepta caracteres numericos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Enroll Cost no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Enroll Cost'
        },   

      }
    },

    minimum_skill: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args:true,
          msg: 'El campo Minimum Skill solo acepta caracteres alfabeticos'
        },
        notEmpty: {
          args:true,
          msg: 'El campo Minimum Skill no puede estar vacio'
        },   
        notNull: {
          args:true,
          msg: 'El registro debe llevar el campo Minimum Skill'
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
    modelName: 'Courses',
  });
  return Courses;
};