const express = require('express');
//var bodyParser = require('body-parser');
const app = express();
var server = require('http').createServer(app);
const io = require('socket.io')(server);
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
server.listen(1337);

app.get("/", function (request, response) {
    response.render('index');
});
var count=0;
io.on('connection', function (socket) {
    socket.on("click", function (data) {
        console.log(data.msg);
        count++;
        console.log(count);
        io.emit("count", {data:count});
        
    });
    socket.on("reset", function (data) {
        console.log(data.msg);
        count=0;
        console.log(count);
        io.emit("resetcount", {data:count});
    });
});





