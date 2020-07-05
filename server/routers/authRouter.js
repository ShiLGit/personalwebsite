const authRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config.js');

const auth = require('../middleware/auth');
const Admin = require('../models/Admin');
//RUN AUTHENTICATION MIDDLEWARE
authRouter.route('/login').post( async (req, res)=>{
    const loginData = req.body;
    try{
        const adminInstance = await Admin.findOne({username: loginData.username, password: loginData.password});
        if(!adminInstance){
            throw new Error('Unmatching PW');
        }

        const token = jwt.sign({_id: adminInstance.username}, config.JWT_SECRET);
        console.log(adminInstance);
        adminInstance.tokens = adminInstance.tokens.concat(token);
        adminInstance.save();
        res.send({token});
    }catch(e){
        console.log(e);
        res.status(201).send({fail: "Login failure: could not authenticate."});
    }
    /* 
    if(!req.body){
        return res.status(400).send({error: "Undefined login body."});
    }
    
    if(req.body.username === loginData.username && req.body.password === loginData.password){
        //generate token
        const admin = 
        const token = jwt.sign({_id: req.body.username}, config.JWT_SECRET, {expiresIn: '3h'});
        res.status(201).send({username: req.body.username, token});
    }else{
        res.status(201).send({fail: "Login failure: username and password incorrect.", token: null});
    }*/

})

authRouter.route('/test').post( auth, (req, res)=>{
    console.log('...???');
    res.send("hi");
});

module.exports = authRouter;