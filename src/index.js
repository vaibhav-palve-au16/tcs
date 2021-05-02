const path = require('path');
const express = require('express')
const bodyParser =require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const User = require('./models/User');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set("view engine", "hbs");

app.use(cookieParser());
app.use(session({ secret: 'sess_secret', cookie: { maxAge: 60000 }}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


let users = [{
    id:1, name: "Manish", email: 'manish@yopmail.com', password: "123456"
}];
let userCount = 1;

const layout = path.join('layouts','index');

const isLoggedIn = (req,res,next) => {
    if(req.session.user) {
        next();
    } else {
        return res.redirect('/login');
    }
}

app.get('/',(req,resp)=>{
    resp.json({
        message: 'Welcome'
    })
});

app.get('/signup',(req,resp)=>{
    resp.render('signup',{
        title: 'Sign Up',
        layout,
        name: '',
        email:''
    })
});

app.post('/signup',(req,res)=> {
    const error = {};
    const data = {
        layout,
        title: 'Sign Up',
        ...req.body
    }
    if(!req.body.name) {
        error.name = 'Please enter the name';
        res.render('signup',{...data,error});
        return;
    }
    const isUserExisting = users.filter(i=>i.email == req.body.email);
    
    if(isUserExisting.length) {
        error.email = 'User already exists.';
        return res.render('signup',{...data,error});
    }
    ++userCount;
    users.push(User({id: userCount,...req.body}));
    res.redirect('/login');
});

app.get('/logout',(req,res)=>{
    req.session.user = '';
    res.redirect('/login');
});

app.get('/login',(req,res)=>{
    if(req.session.user) {
        res.redirect('/profile');
    }
    res.render('login',{
        title: 'Login',
        layout,
        email:''
    })
});

app.post('/login',(req,res)=>{
    const error = {};
    const user = users.filter(i=>(i.email==req.body.email && i.password == req.body.password));
    if(user.length) {
        req.session.user = user[0];
        return res.redirect('/profile');
    } else {
        error.email = 'Invalid email or password'
    }
    res.render('login',{
        title: 'Login',
        layout,
        email:req.body.email,
        error
    })
});

app.get('/profile',isLoggedIn,(req,res)=> {
    res.render('profile',{
        title: 'Profile',
        layout,
        user: req.session.user
    });
});

app.listen(process.env.PORT || 3000,()=>{
    console.log(`http://localhost:${PORT}`)
});