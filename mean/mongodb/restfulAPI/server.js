const express=require('express');
const mongoose=require('mongoose');
const bodyparser = require('body-parser');

const app=express();
app.use(bodyparser.json());
app.use(express.static(__dirname + '/restfulangular/dist/restfulangular' ));
mongoose.connect('mongodb://localhost/Tasks');

const Taskschema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,default:""},
    completed:{type:Boolean,default:false},
},{timestamps:true});
const Tasks = mongoose.model('Task',Taskschema);

app.get('/tasks',function(req,res){
    //res.render('index');
    Tasks.find({},function(err,datas){
        if (err) {
            console.log('something went wrong(retrive users)');
            res.json(err);
        } else {
            console.log('successfully retrive the result(retrive users)!');
            res.json(datas);
        }
    });
});

app.post('/tasks',function(req,res){
    let bob=new Tasks({
        title:req.body.title,
        description:req.body.description,
        completed:false
    });
bob.save(function(err,data){
    if(err){
        console.log('sth wrong (create task)');
        res.json(err);
    }else{
        //res.redirect('/tasks/'+data._id);
        console.log('success save');
        res.json(data);
    }
});
});
app.get('/tasks/:id',function(req,res){
    Tasks.findOne({_id:req.params.id},function(errs,datas){
        if (errs) {
            console.log('something went wrong(retrive users)');
            res.json(errs);
        } else {
            console.log('successfully retrive the result(retrive users)!');
            res.json(datas);
        }
    });
});

app.put('/tasks/:id',function(req,res){
    let updatedinfo={
        'title':req.body.title,
        'description':req.body.description,
        'completed':req.body.completed
    };
    Tasks.updateOne({_id:req.params.id},updatedinfo,function(err,datas){
        if(err){
            console.log('sth wrong');
            res.json(err);
        }
        else{
            console.log('changed a thing');
            console.log(datas);
            res.json(datas);
        }
    });
});

app.delete('/tasks/:id',function(req,res){
    Tasks.deleteOne({_id:req.params.id},function(err,data){
        if(err){
            //console.log()
            res.json(err);
        }
        else{
            res.json(data);
        }
    });
});

app.listen(8000, function () {
    console.log("Listening on port 8000");
});

