'use strict';
const bcrypt = require('bcryptjs');
const crypto = require('crypto');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = bcrypt.hashSync('admin', 10);
    const vToken = crypto.randomBytes(40).toString('hex');
    await queryInterface.bulkInsert('Users', [{
      username: 'admin',
      password: password,
      role: 'Admin',
      verification_token: vToken,
      created_at: Date.now(),
      updated_at: Date.now()
    }], {});


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', [{
      username: 'admin'
    }], {});

  }
};