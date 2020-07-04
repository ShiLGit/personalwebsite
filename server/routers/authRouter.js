const authRouter = require('express').Router();
const loginData = require('../AUTH_DATA');
const jwt = require('jsonwebtoken');

authRouter.route('/').post((req,res)=>{
    console.log(req.body);
    if(!req.body){
        return res.status(400).send({error: "Undefined login body."});
    }
    
    if(req.body.username === loginData.username && req.body.password === loginData.password){
        //generate token
        const token = jwt.sign({_id: req.body.username}, "1234");
        res.status(201).send({token});
    }else{
        res.status(201).send({fail: "Login failure: username and password incorrect.", token: null});
    }

})

module.exports = authRouter;