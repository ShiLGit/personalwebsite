const authRouter = require('express').Router();

authRouter.route('/').post((req,res)=>{
    console.log("LOGIN ATTEMPT ACKNOWLEDGED!!!");
    res.send("WTF");
})

module.exports = authRouter;