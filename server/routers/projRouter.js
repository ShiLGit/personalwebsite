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

//get all project (JSON) data in database
projRouter.route('/init').get(async (req,res)=>{
  console.log("wazap");
  try{
    const allProj = await ProjText.find({});
    return  res.status(200).send({projects: allProj});
  }catch(e){
    console.log("Database error...", e);
    return res.status(500).send(e);
  }

});

//USE AUTH MIDDLEWARE ONCE DONE TESTING
projRouter.route('/delete/:projID').delete(async (req, res)=>{

  let err = null;
  const deleted = await ProjText.findByIdAndDelete(req.params.projID)
                  .catch(e=>{
                    console.log(e);
                    err = e;
                  })
  
  if(!err)
    return res.status(200).send({success: "Successfully deleted " + deleted.projName, deleted});
      
  res.status(400).send(e);
});

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

  res.status(200).send({success: newProj.projName + " saved successfully.", saved: newProj});
})

module.exports = projRouter;