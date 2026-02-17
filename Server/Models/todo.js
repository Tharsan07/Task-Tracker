const mongoose =require('mongoose')
//create todo scheme and todo model in db

const TodoSchema = new mongoose.Schema({
    task : String
})

//Model for todo schema
const TodoModel = mongoose.model("todos",TodoSchema);

module.exports=TodoModel;