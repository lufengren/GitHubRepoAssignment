const express = require('express');
var session = require('express-session');
const flash = require('express-flash');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Mongoose');
var MongooseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        maxlength: 30
    },
});
mongoose.model('Mongoose', MongooseSchema);
var Mongoose = mongoose.model('Mongoose');
var path = require('path');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static(path.join(__dirname,'./public')));
app.set('views',path.join(__dirname,'./views'));
app.set('view engine', 'ejs');
app.get('/',function(req,res){
    Mongoose.find({},function (err, animals) {
        console.log(animals);
        if (err) {
            console.log('something went wrong(animals)');
        } else {
            console.log('successfully retrive all animals!');
            res.render('index', {
                animals: animals
            });
        }
    });
});

app.get('/mongooses/:id',function(req,res){
    Mongoose.find({_id:req.params.id},function(err,result){
        console.log(result);
        if (err) {
            console.log('something went wrong');
        } else {
            console.log('successfully retrive the result!');
            res.render('detail', {
                result: result
            });
        }
    });
});

app.get('/mongooses/new',function(req,res){
    res.render('addpage');
});

app.post('/mongooses',function(req,res){
    console.log("POST DATA", req.body);
    var newMongoose = new Mongoose({
        name: req.body.name,
        breed: req.body.breed
    });
    newMongoose.save(function(err){
        if(err){
            console.log('sth went wrong(add)');
        }else{
            console.log('successfully added a Mongoose');
            res.redirect('/');
        }
    });
});

app.get('/mongooses/edit/:id',function(req,res){
    Mongoose.find({_id:req.params.id},function(err,result){
        
        if (err) {
            console.log('something went wrong(edit)');
        } else {
            console.log('successfully retrive the result(edit)!');
            res.render('edit', {
                result: result
            });
        }
    });
});

app.post('/mongooses/:id',function(req,res){

    Mongoose.update({_id:req.params.id},{name:req.body.name,breed:req.body.breed},function(err){
        
        if (err) {
            console.log('something went wrong');
        } else {
            console.log('successfully retrive the result!');
            res.redirect('/');
        }
    });
});
app.post('/mongooses/destroy/:id',function(req,res){
    Mongoose.remove({_id:req.params.id},function(err){
        if (err) {
            console.log('something went wrong');
        } else {
            console.log('successfully delete the result!');
            res.redirect('/');
        }
    });
});
app.listen(8000, function () {
    console.log("Listening on port 8000");
});