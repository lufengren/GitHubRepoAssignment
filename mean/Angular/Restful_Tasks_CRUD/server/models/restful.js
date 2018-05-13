const mongoose=require('mongoose');
const Taskschema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,default:""},
    completed:{type:Boolean,default:false},
},{timestamps:true});
mongoose.model('Task',Taskschema);