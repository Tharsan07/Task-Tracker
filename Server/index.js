//require -> express,cors,mongoose
const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')
const app=express();

app.use(cors());
app.use(express.json()); 

mongoose.connect("mongodb://127.0.0.1:27017/tasktracker")

app.post('/add',(req,res)=>{
    const task=req.body.task;
})

app.listen(3000,()=>{
    console.log("Server is running on 3000");
});