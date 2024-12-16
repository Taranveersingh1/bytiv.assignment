//essential imports
const express = require("express");
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const taskRoutes=require('./Routes/taskRoutes')
const app= express();
//defining port
const PORT=8000;

//using bodyparser to read req.body
app.use(bodyParser.json());

//establising connection using mongoose
mongoose.connect('mongodb://localhost/todolist',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('connected to server'))
.catch((err)=>{console.log('Error connecting to server',err)})

//defining route
app.use('/tasks',taskRoutes);

//starting the port
app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})
