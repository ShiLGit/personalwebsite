const path = require('path');
const projRouter = require('express').Router();
const auth = require('../middleware/auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../frontend/src/pictures/proj'))
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
});

const upload = multer({storage});
/*
const upload = multer({
    limits: 2000000,
    filename: 'PICTURE.png', 
    dest: path.join(__dirname, '../../frontend/src/pictures'),

});
*/
projRouter.route('/addpic').post(auth, upload.array('pictures', 2), async (req,res)=>{
    console.log("img added");
    res.status(200).send({success: "HI!"});

});

projRouter.route('/addtext').post(auth, (req,res)=>{
  console.log(req.body);
  res.status(200).send({success: "ok"});
})

module.exports = projRouter;