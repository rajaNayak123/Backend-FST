const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
let users = [
    {name:"raja",pass:'123'},
    {name:"rahul",pass:'1783'},
    {name:"nayak",pass:'5163'}
]
router.get('/user',function (req, res) {
    const {user} = req.body
    // for(let i=0; i<users.length; i++){
    //     if(users[i]==user){
    //         res.send('user found')
    //     }
    // }
    users.map((val,ind)=>{if(val.name==user)return res.send(val)})
    res.send('user not found');
})
app.use('/',router);
app.listen(8000,function (){
    console.log('server start on port',8000);
})