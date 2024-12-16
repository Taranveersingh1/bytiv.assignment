const mongoose=require('mongoose');
const statusarr=['pending','in-progress','completed']
const schemaForTask=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,default:'pending',enum:statusarr}
});

const Task=mongoose.model('Task',schemaForTask);

module.exports=Task;