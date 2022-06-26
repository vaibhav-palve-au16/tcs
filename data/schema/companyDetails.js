const mongoose = require('mongoose')
//TODO : manager name 
const companyDetails  = new mongoose.Schema({
  companyName:"string",
  companyAddress:"string",
  companyPincode:"number",
})

module.exports =  mongoose.model('companyDetails', companyDetails)