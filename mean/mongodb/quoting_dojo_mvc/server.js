const express = require('express');
var session = require('express-session');
const flash = require('express-flash');
const app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'client/public')));
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen(8000, function () {
    console.log("Listening on port 8000");
});