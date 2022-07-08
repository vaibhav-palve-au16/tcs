const express = require('express');
const { getUserDetails, createUserDetails, updateUserAllData, deleteUserData, getUserInformation } = require('./userData')
const router = express.Router()
const upload = require('../../middlerware/uploadFile')

module.exports =
  router
    .get('/users', getUserDetails)
    .get('/userinformation', getUserInformation)
    .post('/userdata', createUserDetails)
    .patch('/userdata', updateUserAllData)
    .delete('/userdata', deleteUserData);

