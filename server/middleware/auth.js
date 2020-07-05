//recall .. middleware runs before the route handler >> must call next() for route handler to begin 
const jwt = require('jsonwebtoken');
const config = require('../config');
const Admin = require('../models/Admin');

const auth = async (req, res, next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer', '');
        const decoded = jwt.verify(token, config.JWT_SECRET);

        //find an admin that has the decoded id and a matchin token 
        const user = await Admin.findOne({_id: decoded._id, 'tokens.token': token});
        if(!user){
            throw new Error();
        }
        next();
    }catch(e){
        //note how you don't call next() --> we're not running the route handler, just sending errmsg 
        res.status(401).send({fail: "You are not authorized to access this route!!!"});
    }
    next();
}

module.exports = auth;