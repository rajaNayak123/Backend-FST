const userModel = require("../models/userModel");
const user = async(req, res)=>{
    const data = req.body;
    const createUser = await userModel.create(data);
    res.send({status:'ok',message:createUser});
}
module.exports = user;