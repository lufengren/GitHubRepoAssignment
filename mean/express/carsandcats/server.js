var express = require("express");
//console.log("Let's find out what express is", express);
var app = express();
console.log("Let's find out what app is", app);
app.use(express.static(__dirname + "/static"));
console.log(__dirname);
// app.set('views', __dirname + '/views'); 
// app.set('view engine', 'ejs');

app.listen(8001, function () {
    console.log("listening on port 8001");
});