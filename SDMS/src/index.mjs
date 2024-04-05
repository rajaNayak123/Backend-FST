import express from 'express';
const app = express();
app.use(express.json());
import mongoose from 'mongoose';
import router from './routes/route.mjs'
mongoose.connect('mongodb+srv://nayakraja151:helloMongoDB@cluster0.xzcz0ry.mongodb.net/SDMS').then(()=>console.log('database connected')).catch((err)=>console.log(err));
app.use('/',router);
app.listen(8000,()=>console.log('server started on port',8000));