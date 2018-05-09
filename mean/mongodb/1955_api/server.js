const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/People');
var PeopleSchema=new mongoose.Schema({
    name:{
        type:String,required:true
    }
},{timestamps:true});
var People=mongoose.model('Peolple',PeopleSchema);
//var People=mongoose.model('People');

app.get('/',function(req,res){
    People.find({},function(errs,datas){
        if(errs){
            console.log('sth was wrong');
        } else{
            console.log('sucess');
            res.json(datas);
        }
    });
});
app.get('/new/:name',function(req,res){
    var newpeople=new People({name:req.params.name});
    newpeople.save(function(errs){
        if(errs){
            console.log('sth was wrong(newpeople)');
        }else{
            console.log('add newpeople successfully');
            res.redirect('/');
        }
    });
});

app.get('/remove/:name',function(req,res){
    People.remove({name:req.params.name},function(errs,datas){
        if(errs){
            console.log('sth was wrong(remove a people');
        }else{
            console.log('successfully(remove)');
            res.redirect('/');
        }
    });
});

app.get('/:name',function(req,res){
    People.find({name:req.params.name},function(errs,datas){
        if(errs){
            console.log('sth was wrong(retrive)');
        }else{
            console.log('success retirve');
            res.json(datas);
        }
    });
});

app.listen(8000, function () {
    console.log("Listening on port 8000");
});