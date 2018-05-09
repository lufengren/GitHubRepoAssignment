var quote=require('../controllers/quotes.js');   
module.exports = function(app){
    app.get('/', function (request, response) {
        response.render('../client/views/index');
    });
    app.post('/quotes',quote.createquote);
    app.get('/quotes',quote.quoteall);
};