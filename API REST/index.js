const express = require('express');
const { ROUTE_CONTSTANTS } = require('./helpers/route_constants');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) 

app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    res.sendFile(__dirname+'/pages/login.html')
});

app.post(ROUTE_CONTSTANTS.POST_LOGIN,function(req,res){
    console.log(req.body); 
    res.send("Successfully registered")
});

app.listen(3000);

