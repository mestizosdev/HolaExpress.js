/** @module modules/user/user.model */
'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  /**
   * @class
   * @property {id} number
   * @property {username} string
   * @property {password} string
   * @property {email} string
   * @property {role} string
   * @property {status} boolean
   */
    static associate (models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
    tableName: 'users'
  })
  return User
}
