const mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
    createquote: function (request, response) {
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
    },

    quoteall: function (request, response) {
        Quote.find({}, null, {
            sort: {
                update: -1
            }
        }, function (err, quotes) {
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
    }
};