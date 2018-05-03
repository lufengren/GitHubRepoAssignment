var express = require("express");
var bodyParser = require('body-parser');
//var session = require('express-session');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
// app.use(session({
//     secret: 'keyboardkitteh',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
//   }));
  
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get("/", function (request, response){
    
    response.render('index');
});

app.post("/result", function (request, response){
    var name=request.body.name;
    var location=request.body.location;
    var language=request.body.language;
    var comment=request.body.comment;
    //console.log(request.body.name);
    // var context={
    //     name:name,
    //     location:location,
    //     language:language,
    //     comment:comment
    // };
    response.render('result',{
        name:name,
        location:location,
        language:language,
        comment:comment
    });
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});