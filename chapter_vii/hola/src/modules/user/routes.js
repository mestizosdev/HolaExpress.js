const express = require('express')
const router = express.Router()
const { param, body } = require('express-validator')

const { signUp, signIn, refreshToken, list, update, remove } = require('./controllers/index')
const { checkJwt } = require('../../middlewares/check-jwt')
const { checkRole } = require('../../middlewares/check-role')

router.get('/users',
  [checkJwt, checkRole(['Administrator', 'Manager'])],
  list)

router.post('/signup',
  body('username')
    .not().isEmpty()
    .withMessage('Should have a username')
    .isLength(2)
    .withMessage('The username should have a more letters')
    .custom(value => !/\s/.test(value))
    .withMessage('The username not should have a blank spaces'),
  body('password')
    .isStrongPassword()
    .withMessage('The password minimum 8 characters, minimum one upper case or lower case and minimum one symbol'),
  body('email').isEmail()
    .withMessage('Should have a valid email'),
  signUp)

router.post('/signin',
  body('username')
    .not().isEmpty()
    .withMessage('Username is required'),
  body('password')
    .not().isEmpty()
    .withMessage('Password is required'),
  signIn)

router.post('/refresh-token', refreshToken)

router.put('/user/:id',
  [checkJwt, checkRole(['Administrator', 'Manager'])],
  param('id').toInt().notEmpty()
    .withMessage('Should have a numeric identifier'),
  body('username')
    .not().isEmpty()
    .withMessage('Should have a username')
    .isLength(2)
    .withMessage('The username should have a more letters')
    .custom(value => !/\s/.test(value))
    .withMessage('The username not should have a blank spaces'),
  body('password')
    .isStrongPassword()
    .withMessage('The password minimum 8 characters, minimum one upper case or lower case and minimum one symbol'),
  body('status').isBoolean(true)
    .withMessage('Should have a true or false in status'),
  body('email').isEmail()
    .withMessage('Should have a valid email'),
  update)

router.delete('/user/:id',
  [checkJwt, checkRole(['Administrator'])],
  param('id')
    .toInt()
    .notEmpty()
    .withMessage('Should have a numeric identifier'),
  remove)

module.exports = router
