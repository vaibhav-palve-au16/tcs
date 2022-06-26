const mongoose = require('mongoose');

const authUser = new mongoose.Schema({
  username : {type:'string', required:true},
  email: {type:'string', required:true},
  password: {type:'string', required:true},
},
{ timestamps: true }
)

module.exports = mongoose.model('authuser', authUser)