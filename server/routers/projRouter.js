const path = require('path');
const projRouter = require('express').Router();
const ProjText = require('../models/ProjText');
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

projRouter.route('/addpic').post(auth, upload.array('pictures', 2), async (req,res)=>{
    console.log("img added");
    res.status(200).send({success: "HI!"});

});

projRouter.route('/addtext').post(auth, async (req,res)=>{
  console.log(req.body);
  const duplicate = await ProjText.findOne({projID: req.body.projID});
  if(!duplicate){
    const newProj = new ProjText({...req.body});
    console.log(newProj);
    newProj.save();
  }else{
    return res.status(401).send({error: "Project with given ProjID already exists. Try selecting EDIT option."});
  }

  res.status(200).send({success: "ok"});
})

module.exports = projRouter;