'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('users', [{
   name: 'Yuan Quitian',
   email: 'jquitian28@misena.edu.co',
   password: 'callabo'
 },
 {
  name: 'Pedro',
  email: 'pedrojh@misena.edu.co',
  password: 'fiumbi'
 }
], {});

  },

  async down (queryInterface, Sequelize){
    await queryInterface.bulkDelete('users', null, {});
  }
};
