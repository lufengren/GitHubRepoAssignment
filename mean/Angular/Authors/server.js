const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
app.use(express.static( __dirname + '/client/dist/client'));
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost/Author');

const quoteSchema=new mongoose.Schema({
    quote:{
        type:String,
        minlength:[3,'quote must be at least 3 characters'],
    },
    vote:{
        type:Number,
        min:0,
    }
});

const authorSchema=new mongoose.Schema({
    author:{
        type:String,
        required:[true,'author is required'],
        minlength:[3,'author name must at least 3 characters']
    },
    quotes:[quoteSchema]
},{timestamps:true});

var Authors=mongoose.model('Authors',authorSchema);
var Quotes=mongoose.model('Quotes',quoteSchema);

app.get('/authors',function(req,res){
    Authors.find({},function(err,data){
        if(err){
            console.log('retrive all authors wrong');
            res.json(err);
        }else{
            console.log('retrive all authors successfully');
            console.log(data);
            res.json(data);
        }
    });
});

app.post('/authors',function(req,res){
    let author=new Authors({
        author:req.body.author
    });
    author.save(function(err,data){
        if(err){
            console.log('post author wrong');
            let result={
                status:'not good',
                errors:err['errors']['author']['properties']['message']
            };
            res.json(result);
        }else{
            console.log('post author successfully');
            res.json(data);
        }
    });
});

app.put('/authors/:id',function(req,res){
    let updateinfo={
        'author':req.body.author
    };
    Authors.updateOne({_id:req.params.id},updateinfo,{ runValidators: true },function(err,data){
        if(err){
            console.log('update was wrong');
            let result={
                status:'not good',
                errors:err['errors']['author']['properties']['message']
            };
            res.json(result);
        }else{
            console.log('update successfully');
            res.json(data);
        }
    });
});

app.delete('/authors/:id',function(req,res){
    Authors.deleteOne({_id:req.params.id},function(err,data){
        if(err){
            console.log('delete wrong');
            res.json(err);
        }else{
            console.log('delete successfully');
            res.json(data);
        }
    });
});

app.get('/authors/:id',function(req,res){
    Authors.findOne({_id:req.params.id},function(err,data){
        if(err){
            console.log('retrive a specific author err');
            res.json(err);
        }else{
            console.log('retrive a specific author successfully');
            res.json(data);
        }
    });
});

app.get('/quotes/:id',function(req,res){
    Authors.find({_id:req.params.id},function(err,data){
        if(err){
            console.log('get quotes err');
            res.json(err);
        }else{
            console.log('get quotes successfully');
            res.json(data);
        }
    });
});

app.put('/quotes/:id',function(req,res){
    console.log(req.body);
    console.log(req.params.id);
    Authors.update(req.body,{ $pull: {quotes:{_id:req.params.id}}},function(err,data){
        if(err){
            console.log('delete err',err);
            res.json(err);
        }
        else{
            console.log('delete success');
            res.json(data);
        }
    });
});

app.put('/votes/:id',function(req,res){
    console.log(req.body.author);
    console.log(req.body.id);
    console.log(req.body.vote);
    
    Authors.update({_id:req.body.author._id,'quotes._id':req.params.id},{$set:{'quotes.$.vote':req.body.vote}},function(err,data){
        if(err){
            console.log('insert vote err');
            res.json(err);
        }
        else{
            console.log('insert vote success');
            res.json(data);
        }
    });
});

app.post('/quotes',function(req,res){
    console.log(req.body);
    Quotes.create({quote:req.body.quote,vote:req.body.vote}, function(err, data){
        if(err){
             console.log('add quotes wrong');
             res.json(err);
        }
        else {
             Authors.findOneAndUpdate({_id: req.body.id}, {$push: {quotes: data}}, function(err, data){
                  if(err){
                       console.log('add quotes with author wrong');
                       res.json(err);
                  }
                  else {
                       console.log('add quotes with author success');
                       res.json(data);
                  }
             });
         }
   });   
});


// app.all("*", (req,res,next) => {
//     res.sendFile(path.resolve("./client/dist/index.html"));
// });

app.listen(8000, function () {
    console.log("Listening on port 8000");
});