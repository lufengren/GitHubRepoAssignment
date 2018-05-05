const express = require('express');
var bodyParser = require('body-parser');
const app = express();  
var server = require('http').createServer(app);  //http 运行于express之上
const io = require('socket.io')(server);  //io 运行于http之上
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
var users={};
io.on('connection', function (socket) {
    socket.on("got_new_user", function (regdata) {
        //console.log(regdata.name);
        var name=regdata.name;
        users[socket.id]=name;
        io.emit("new_user",{msg:`${name} has joined the room`});
        //socket.broadcast.emit("new_user",{data:temp});
        //socket.emit("subinfo", {data:temp});
    });
    socket.on("got_new_msg", function (msgdata) {
        //console.log(msgdata.msg);
        var curusername=users[socket.id];
        io.emit("new_msg",{msg:`${curusername} says:${msgdata.msg}`});
    });
    socket.on("disconnect", function () {
        var curusername=users[socket.id];
        console.log(curusername);
        io.emit("disconnect_msg",{msg:`${curusername} leave the room`});
    });
});





