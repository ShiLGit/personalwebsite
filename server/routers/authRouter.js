const authRouter = require('express').Router();
const loginData = require('../AUTH_DATA');
const jwt = require('jsonwebtoken');

authRouter.route('/').post((req,res)=>{
    console.log(req.body);
    if(!req.body){
        return res.status(400).send({error: "Undefined login body."});
    }
    
    if(req.body.username === loginData.username && req.body.password === loginData.password){
        console.log("yay");
        const token = jwt.sign({_id: req.body.username}, "1234");
        console.log(token);
        jwt.verify(token, "1234")
        res.send("HI");
    }else{
        res.send({fail: "Login information incorrect."});
    }

})

module.exports = authRouter;