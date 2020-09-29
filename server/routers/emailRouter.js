const emailRouter = require('express').Router();
const nodemailer = require("nodemailer");
//DELETE AFTER
require('dotenv').config();
const {google} = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const OAuth2Client = new OAuth2(process.env.OAUTH2_CLIENT_ID, process.env.OAUTH2_CLIENT_SECRET, "https://developers.google.com/oauthplayground");
OAuth2Client.setCredentials({refresh_token: process.env.OAUTH2_REFRESH_TOKEN});
const accessToken = OAuth2Client.getAccessToken();
emailRouter.route('/send').post(async (req, res)=>{
  console.log(req.body);
  const emailData = req.body;
  
  //exit if invalid data
  if(!emailData.emailBody)
    return res.status(400).send({error: "Missing message body."});

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.OAUTH2_CLIENT_ID,
      clientSecret: process.env.OAUTH2_CLIENT_SECRET,
      refreshToken: process.env.OAUTH2_REFRESH_TOKEN,
      accessToken: accessToken
    }
  });

  const mailOptions = {
    from: emailData.senderEmail?emailData.senderEmail: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Persweb email from ${emailData.senderName}`,
    text: emailData.emailBody + ((emailData.senderEmail && senderEmail !== "")? `\n\nSender email: ${emailData.senderEmail}`:null)
  };
  let emailResponse={success:false, response: null};
  transporter.sendMail(mailOptions, (err, res)=>{
    if(err){
      emailResponse.respsonse=err;
      console.log(err);
      //      return res.status(500).send(err);
    }
    if(res){
      console.log("res.")
      emailResponse ={success: true, response: res}
    }
    console.log("wat")
    res.send({error: "Did not receive success affirmation - email probably unsuccessfull..."});

  })
});
/*
async function main() {
  let testAccount = await nodemailer.createTestAccount();
  console.log("******************\n\n\n\n\n\n\n\n" + process.env.OAUTH2_REFRESH_TOKEN)
  
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.OAUTH2_CLIENT_ID,
      clientSecret: process.env.OAUTH2_CLIENT_SECRET,
      refreshToken: process.env.OAUTH2_REFRESH_TOKEN,
      accessToken: accessToken
    }
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "test",
    html: "<h1>hallo wurlsd</h1>"
  };

  transporter.sendMail(mailOptions, (err, res)=>{
    if(err)
      console.log(err);
    if(res)
      console.log(res)
  })
}

main().catch(console.error);*/

module.exports = emailRouter;