const express=require('express');
const app=express();
const bodyparser = require('body-parser');
const mongoose=require("mongoose");
app.use(express.static( __dirname + '/client/dist/client'));
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost/NinjaGold');
const ScoreSchma = new mongoose.Schema({
    user:{type:String},
    score:{type:Number}
},{timestamps:true});
var Scores=mongoose.model('scores',ScoreSchma);

app.get('/topFour',function(req,res){
    Scores.find({},null,{sort:{score:'descending'},limit:4},function(err,data){
        if(err){
            console.log("get info err");
        
        }else{
            console.log('get info success');
            res.json(data);
        }
    });
});


app.post('/scores',function(req,res){
    var score = new Scores({
        user: req.body.user,
        score: req.body.score
    });
    score.save(function (err,data) {
        if (err) {
            console.log('something went wrong');
        } else {
            res.json(data);
            console.log('successfully added a score!');
        }
    });
});






app.listen(8000, function () {
    console.log("Listening on port 8000");
});
