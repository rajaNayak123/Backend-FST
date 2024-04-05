//import exprss.js
const express = require('express');
//creating instance of express to create express app
const app = express();
// creat router instance for routing from express
const router = express.Router();
//enableing json data read express from body
app.use(express.json());
// get api creation router.get(path,callbackFun)
router.get('/hello',function(req,res){

    // geting value from query params
    // const name = req.query.product;
    // const brand = req.query.brand;

    // getting query  object
    // const data = req.query
    const user = req.body;
    res.send({user});
})
// global middleware for all api calling defined with router
app.use('/',router);
// code for server satrt app.listen(port,callbackFun)
app.listen(8000,function(){
    console.log('server started at port:',8000);
})