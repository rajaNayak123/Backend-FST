import express from 'express';
const app = express();
const router = express.Router();
//inbuilt 
app.use(express.json());
// global middleware or application level
app.use((req,res,next)=>{
    let auth = ture;
    if(auth){
        console.log("i am global middleware")
        next();
    }else{
        res.send("login please")
    }
})
// custom middleware
router.get('/test',(req,res)=>{
    res.send("hello middlewar");
})
app.use('/',router);
app.listen(8000,()=>{
    console.log("server started on port",8000);
})