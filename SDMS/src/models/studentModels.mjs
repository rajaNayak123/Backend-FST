import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name:String,
    rollNo:String,
    dob:String,
    batch: String,
    course:String,
    semster:Number,
    phono:String,
    age:Number,
    email:String,
    password:String,
    gender:String,
},{timestamps:true});

export default mongoose.model('studentData',studentSchema);