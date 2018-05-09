var mongoose = require('mongoose');
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
//mongoose.Promise = global.Promise;