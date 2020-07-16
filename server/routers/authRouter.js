const authRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../config.js');

const auth = require('../middleware/auth');
const Admin = require('../models/Admin');

//RUN AUTHENTICATION MIDDLEWARE
authRouter.route('/login').post( async (req, res)=>{
    console.log('login request detected')
    const loginData = req.body;
    try{
        const adminInstance = await Admin.findOne({username: loginData.username, password: loginData.password});
        if(!adminInstance){
            throw new Error('Unmatching PW');
        }

        const token = jwt.sign({_id: adminInstance._id.toString()}, config.JWT_SECRET);
        adminInstance.token = token;
        adminInstance.save();
        res.status(200).send({token});
    }catch(e){
        console.log(e);
        res.status(200).send({fail: "Login failure: could not authenticate."});
    }
})

authRouter.route('/logout').post(auth, (req,res)=>{
        req.admin.token = null;
        try{
            req.admin.save();
        }catch(e){
            console.log('/logout err:', e);
            return res.status(400).send(e);
        }
        res.status(200).send({success: "Successfully logged out."});

})

authRouter.route('/test').post(auth, (req, res)=>{
    console.log('...???');
    res.send("hi");
});

module.exports = authRouter;