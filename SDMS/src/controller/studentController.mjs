import studentModel from '../models/studentModels.mjs';
const findStudent = async(req,res)=>{
    // const students = await studentModel.find();
    const students = await studentModel.findOne();
    res.send({status:true,messages:students});
}
const createStudent = async(req,res)=>{
    const data = req.body;
    // const createdStudent = await studentModel.create(data);
    const createdStudent = await studentModel.insertMany([data,data,data]);
    return res.send({status:true, messages:createdStudent});
}
const deleteStudent = async(req,res)=>{
    // const data = await studentModel.deleteMany({name:'raja nayak'});
    const data = await studentModel.findByIdAndDelete({_id:'660f88cf83748d3c1b8d7908'});
    return res.send({status:true, messages:data});
}
const updateStudent = async(req,res)=>{
    const newStudent = await studentModel.updateOne({"name":"raja"},{$set:{"name":"Praja"}});
    return res.send({status:true, messages:newStudent});
}
export {findStudent,createStudent,deleteStudent,updateStudent};
