require('dotenv').config();
const mongodb = require('mongoose');

const connectionDB =  ( ()=> {
  return mongodb.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }).then(()=>{console.log("succefully connect Db")})
  .catch((error)=>{console.log(error.message)})
});

module.exports = connectionDB