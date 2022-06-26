const express = require('express')
const {createCompanyData, getCompanyData, updateCompanyData, deleteCompanyData}= require('./companyData')

module.exports = express.Router()
                  .get('/company', getCompanyData)
                  .post('/company',createCompanyData)
                  .patch('/company',updateCompanyData)
                  .delete('/company',deleteCompanyData)