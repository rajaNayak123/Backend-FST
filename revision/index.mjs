import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://nayakraja151:helloMongoDB@cluster0.xzcz0ry.mongodb.net/FSTclass').then(() => console.log('data contected')).catch((err) => console.log(err));
app.listen(2000, () => console.log());