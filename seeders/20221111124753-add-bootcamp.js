'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('bootcamps', [{
   name: 'Boot a',
   description:'Descripcion 1',	
   phone:'3166443555',
  average_cost:'1000',	
  average_rating:'200',	
  user_id:'1'
 },
 {
  name: 'Boot b',
  description:'Descripcion 2',	
  phone:'31249910435',
 average_cost:'2000',	
 average_rating:'300',	
 user_id:'2'
 }
], {});

  },

  async down (queryInterface, Sequelize){
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
