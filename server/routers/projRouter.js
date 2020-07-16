const authRouter = require('./authRouter');

const projRouter = require('express').Router();

projRouter.route('/add').post(async (req,res)=>{
    console.log('post to /projects/: ', req.body);
    res.status(200).send({success: "HI!"});

})

module.exports = projRouter;