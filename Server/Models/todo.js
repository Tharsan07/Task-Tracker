const mongoose =require('mongoose')
//create todo scheme and todo model in db

const TodoSchema = new mongoose.Schema({
    task : String,
    done:{
        type:Boolean,
        default:false
    }
});

//Model for todo schema
const TodoModel = mongoose.model("todos",TodoSchema);

module.exports=TodoModel;