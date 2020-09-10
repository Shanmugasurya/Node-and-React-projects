const express = require('express');
const { ROUTE_CONTSTANTS } = require('./helpers/route_constants');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) 

app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    res.sendFile(__dirname+'/pages/login.html')
});

app.get(ROUTE_CONTSTANTS.GET_REGISTER,function (req,res){
    res.sendFile(__dirname+'/pages/register.html')
});

app.get(ROUTE_CONTSTANTS.GET_STYLES,function (req,res){
    res.sendFile(__dirname+'/pages/Styles.html')
});

app.post(ROUTE_CONTSTANTS.POST_LOGIN,function(req,res){
    console.log(req.body); 
    res.redirect('/styles')
    //res.send("Successfully logged in!")
});

app.post(ROUTE_CONTSTANTS.POST_REGISTER,function(req,res){
    console.log(req.body); 
    res.redirect('/');
    //res.send("Successfully registered")
});

app.post(ROUTE_CONTSTANTS.POST_STYLES,function(req,res){
    console.log(req.body); 
    res.redirect('/');
    //res.send("Successfully registered")
});

app.listen(3000);