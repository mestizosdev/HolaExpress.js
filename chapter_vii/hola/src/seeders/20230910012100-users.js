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
      username: 'manager',
      password: await passwordUtil.encrypt(password),
      email: 'manager@mestizos.dev',
      role: 'Manager'
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
