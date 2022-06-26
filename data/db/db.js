require('dotenv').config();
const mongodb = require('mongoose');

const connectionDB =  ( (mongodbUrl)=> {
  return mongodb.connect(mongodbUrl,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }).then(()=>{console.log("succefully connect Db")})
  .catch((error)=>{console.log(error);})
})

module.exports = connectionDB