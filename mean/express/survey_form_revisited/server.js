const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
server.listen(1337);

app.get("/", function (request, response) {
    response.render('index');
});

io.on('connection', function (socket) {
    socket.on("posting_form", function (data) {
        console.log(data.data);
        var temp=data.data;
        var randomNum=Math.floor(Math.random() * (1000 - 1 + 1) ) + 1;
        console.log(randomNum);
        socket.emit("subinfo", {data:temp});
        socket.emit("randomNum", {data:randomNum});
    });

});





