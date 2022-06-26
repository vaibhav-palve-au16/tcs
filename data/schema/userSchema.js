const mongoose = require('mongoose');
//TODO: user will be update pan card , adhar card
const userSchema = new mongoose.Schema({
  name : 'string',
  password: 'string',
  email: 'string',
  employID:{type:'number',  unique: true},
  phoneNumber:'number',
  dateOfJoining:"string",
  avatar:{type:"string"},
  
})

module.exports = mongoose.model('userdata',userSchema)