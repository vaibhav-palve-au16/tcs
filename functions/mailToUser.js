const mail = require('nodemailer');
require('dotenv').config
const transporter = mail.createTransport({service:'gmail', auth:{
  type: 'Oauth2',
  user: process.env.EMAIL_USERNAME,
  password: process.env.PASSWORD,
  clientId: process.env.CLINT_ID,
  clientSecret: process.env.CLINT_SECURET,
  refreshToken: process.env.REFRESH_TOKEN

}})

const mailConfigurations ={
  from: "v.palve777@gmail.com",

  to:"vaibhavpalve1234@gmail.com",

  subject: 'sending Email to verify you',

  text: "verify your mail id from below link ", 

}

transporter.sendMail(mailConfigurations, (err, info)=>{
  if(err) console.log(err.message);
  console.log("Gmail Send Successfully");
  console.log(info);
})