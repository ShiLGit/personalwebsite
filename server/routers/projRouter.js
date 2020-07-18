const path = require('path');
const projRouter = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../frontend/src/pictures'))
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
projRouter.route('/addpic').post(upload.array('pictures', 2), async (req,res)=>{
    console.log(path.join(__dirname, '/img'));
    console.log(req.files);

    res.status(200).send({success: "HI!"});

})

module.exports = projRouter;