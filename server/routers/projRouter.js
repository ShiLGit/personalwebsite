const path = require('path');
const projRouter = require('express').Router();
const ProjText = require('../models/ProjText');
const auth = require('../middleware/auth');
const multer = require('multer');
const glob = require("glob");
const fs = require('fs');


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
  try{
    const allProj = await ProjText.find({});
    return  res.status(200).send({projects: allProj});
  }catch(e){
    console.log("Database error...", e);
    return res.status(500).send(e);
  }

});

//docID = _id in mongodb, projID = projId property of projText objects
//USE AUTH MIDDLEWARE ONCE DONE TESTING
projRouter.route('/delete/:docID/:projID').delete(auth,async (req, res)=>{
   let err = null;
  const deleted = await ProjText.findByIdAndDelete(req.params.docID)
                  .catch(e=>{
                    console.log(e);
                    err = e;
                  })
  
  //delete all pictures in folder with projID prestr
  glob(path.join(__dirname, '../../frontend/src/pictures/proj/' +req.params.projID+ "*"), (err, files)=>{
    if(err){
      console.log(err);
    }else{
      files.forEach(f=>{
         
          if(f.includes(req.params.projID + "_")){
            console.log("ATTEMPTING TO UNLINK " + f);
            fs.unlink(f, err=>{
              if(err)
                console.log("\nFILE DELETION ERROR: \n" + err);
            })
          }
          
      })
    }
  });
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
  let newProj;
  const duplicate = await ProjText.findOne({projID: req.body.projID});
  if(!duplicate){
    newProj = new ProjText({...req.body});
    console.log(newProj);
    newProj.save(()=>{
      res.status(200).send({success: newProj.projName + " saved successfully.", saved: newProj});      
    });
  }else{
    return res.status(401).send({error: "Project with given ProjID already exists. Try selecting EDIT option."});
  }
  

});

//update project text
projRouter.route('/edittext/:projIDName').put(auth, async (req, res)=>{
  try{
    const project = await ProjText.findOneAndReplace({projID: req.params.projIDName}, req.body, {new: true});
    return res.send({success: req.body.projName + " updated successfully.", updated: project});
  }catch(e){
    res.status(400).send(e);
  }
});

module.exports = projRouter;