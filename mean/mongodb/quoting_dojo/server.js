const express = require('express');
var session = require('express-session');
const flash = require('express-flash');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Quote');
var QuoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        maxlength: 30
    },
    update: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');
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
app.use(express.static(path.join(__dirname, './public')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
    response.render('index');
});

app.post('/quotes', function (request, response) {
    console.log("POST DATA", request.body);
    if (request.body.submit == 'Add my quote') {
        var quote = new Quote({
            name: request.body.name,
            quote: request.body.quote
        });
        quote.save(function (err) {
            if (err) {
                console.log('something went wrong', err);
                for (var key in err.errors) {
                    request.flash('quoting', err.errors[key].message);
                }
                response.redirect("/");
            } else {
                console.log('successfully added a quote!');
                response.redirect("/");
            }
        });
    } else {
        response.redirect("/");
    }
});

app.get('/quotes', function (request, response) {
    Quote.find({},null,{sort:{update:-1}},function (err, quotes) {
        console.log(quotes);
        if (err) {
            console.log('something went wrong');
        } else {
            console.log('successfully retrive all quotes!');
            response.render('quotes', {
                quotes: quotes
            });
        }
    });
});
app.listen(8000, function () {
    console.log("Listening on port 8000");
});