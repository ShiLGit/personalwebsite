const authRouter = require('express').Router();
const loginData = require('../AUTH_DATA');
const jwt = require('jsonwebtoken');
const config = require('../config.js');
const auth = require('../middleware/auth');

//RUN AUTHENTICATION MIDDLEWARE
authRouter.route('/login').post(auth, (req, res)=>{

    if(!req.body){
        return res.status(400).send({error: "Undefined login body."});
    }
    
    if(req.body.username === loginData.username && req.body.password === loginData.password){
        //generate token
        const token = jwt.sign({_id: req.body.username}, config.JWT_SECRET, {expiresIn: '3h'});
        res.status(201).send({username: req.body.username, token});
    }else{
        res.status(201).send({fail: "Login failure: username and password incorrect.", token: null});
    }

})

authRouter.route('/test').post( auth, (req, res)=>{
    console.log('...???');
    res.send("hi");
});

module.exports = authRouter;