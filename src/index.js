const express = require('express');
const path = require('path');
const app = express();


const path1 = path.join(__dirname , '../public')
app.use(express.static(path1 ))
console.log(path1)

app.get('/',(req,res)=>{
    res.send('<h1>welcome to my home page</h1>');
})

app.get("/about",(req,res)=>{
res.send('welcome to my about page');
});

app.get("/resume.pdf",(req,res)=>{
    res.send('<a href = "file:///C:/Users/Vaibhav/OneDrive/Desktop/tcs%20applicatin/tcs/Resume.pdf"  type="_blank">  r </a>')
});

app.get("/temp",(req,res)=>{
res.send('welcome to my temp page');
})
 
app.listen(process.env.PORT || 3000)