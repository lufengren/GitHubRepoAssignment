var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
  
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get("/", function (request, response){
    
    // if(!request.session.time){
    //     request.session.time=0;
    // }
    // else{
    //     request.session.time=2;
    // }
    request.session.time++;
    response.render('index',{time:request.session.time});
});

app.get("/doubleadd", function (request, response){
    request.session.time+=2;
    response.render('index',{time:request.session.time});
});

app.get("/reset", function (request, response){
    request.session.time=1;
    response.render('index',{time:request.session.time});
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});