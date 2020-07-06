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

        const token = jwt.sign({_id: adminInstance._id.toString()}, config.JWT_SECRET);
        console.log(adminInstance);
        adminInstance.token = token;
        adminInstance.save();
        res.status(200).send({token});
    }catch(e){
        console.log(e);
        res.status(201).send({fail: "Login failure: could not authenticate."});
    }
})

authRouter.route('/logout').post(auth, (req,res)=>{
        req.admin.token = null;
        req.admin.save();
        res.status(200).send({success: "Successfully logged out."});

})

authRouter.route('/test').post( auth, (req, res)=>{
    console.log('...???');
    res.send("hi");
});

module.exports = authRouter;