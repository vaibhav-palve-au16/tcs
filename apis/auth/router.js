const express = require('express');
const { signup, login } = require('./components');


module.exports = express.Router().post('/signup', signup).post('/login', login)