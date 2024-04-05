const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/route');
const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://nayakraja151:helloMongoDB@cluster0.xzcz0ry.mongodb.net/').then(()=>console.log('database connected')).catch((err)=>console.log(err))
app.use('./',router);
app.listen(8000,function(){
    console.log('server started',8000);
})