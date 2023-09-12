'use strict'
const passwordUtil = require('../utils/password')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password = '1234'
    await queryInterface.bulkInsert('users', [{
      username: 'system',
      password: await passwordUtil.encrypt(password),
      email: 'system@mestizos.dev',
      role: 'Administrator'
    },
    {
      username: 'default',
      password: await passwordUtil.encrypt(password),
      email: 'default@mestizos.dev',
      role: 'Public'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
