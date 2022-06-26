require('dotenv').config()
const connectionDB = require('./data/db/db')
const express = require('express')
const bodyParser = require('body-parser')
const userData = require('./apis/userData/router')
const companyData = require('./apis/companyDetails/router')
const auth = require('./apis/auth/router')
port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/uploads', express.static('uploads'))

app.get('/',(req, res)=>{
  console.log(req.url)
  res.send({message:'🍔🍔🍔 we have it '})
})

app.use('/api/v1', auth)

app.use('/api/v1', userData )
app.use('/api/v1', companyData )

const start = async ()=>{
  try {
    await connectionDB(process.env.MONGO_URL)
    app.listen(port , (req, res)=>{
    console.log(`http://localhost:${port}`);
})
  } catch (error) {
    console.log(error.message);
  }
}
start()


