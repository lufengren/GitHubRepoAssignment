const express=require('express');
const bodyparser = require('body-parser');
const app=express();
app.use(bodyparser.json());
app.use(express.static( __dirname + '/client/dist/client'));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen(8000, function () {
    console.log("Listening on port 8000");
});

