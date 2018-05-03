var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
    response.render('cats');
});

app.get("/detail1", function (request, response){
    var catinfo={
        favorite_food:"Spaghetti",
        age:"2",
        sleeping_spot:"under the bed"
    };
    response.render('details',{name:"kitty",catinfo:catinfo});
});

app.get("/detail2", function (request, response){
    var catinfo={
        favorite_food:"cookie",
        age:"5",
        sleeping_spot:"in a sunbeam"
    };
    response.render('details',{name:"catty",catinfo:catinfo});
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});