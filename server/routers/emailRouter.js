const emailRouter = require('express').Router();
const nodemailer = require("nodemailer");
//DELETE AFTER
require('dotenv').config();
const {google} = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const OAuth2Client = new OAuth2(process.env.OAUTH2_CLIENT_ID, process.env.OAUTH2_CLIENT_SECRET, "https://developers.google.com/oauthplayground");
OAuth2Client.setCredentials({refresh_token: process.env.OAUTH2_REFRESH_TOKEN});
const accessToken = OAuth2Client.getAccessToken();
emailRouter.route('/send').post(){
  
}
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

main().catch(console.error);