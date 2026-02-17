//require -> express,cors,mongoose
const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')
const app=express();

const TodoModel = require('./Models/todo')

app.use(cors());
app.use(express.json()); 



mongoose.connect("mongodb://localhost:27017/todo")

app.post('/add',(req,res)=>{
    const task=req.body.task;
    TodoModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(error => res.json(error))

})

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.listen(3000,()=>{
    console.log("Server is running on 3000");
});