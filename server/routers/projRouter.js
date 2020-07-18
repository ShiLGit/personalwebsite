const path = require('path');
const projRouter = require('express').Router();
const multer = require('multer');
const upload = multer({
    filename: 'PICTURE.png', 
    dest: path.join(__dirname, '/img'),
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Allowed only .png, .jpg, .jpeg and .gif'));
        }
    }
});

projRouter.route('/add').post(upload.single('pictures'), async (req,res)=>{
    console.log(path.join(__dirname, '/img'));
    console.log(req.file);
    res.status(200).send({success: "HI!"});

})

module.exports = projRouter;