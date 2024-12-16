const express = require("express");
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const taskRoutes=require('./Routes/taskRoutes')
const app= express();

const PORT=8000;


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/todolist',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('connected to server'))
.catch((err)=>{console.log('Error connecting to server',err)})

app.use('/tasks',taskRoutes);

app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})
