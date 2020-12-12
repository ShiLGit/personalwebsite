const emailRouter = require("express").Router();
const nodemailer = require("nodemailer");
//DELETE AFTER
require("dotenv").config();
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const OAuth2Client = new OAuth2(
	process.env.OAUTH2_CLIENT_ID,
	process.env.OAUTH2_CLIENT_SECRET,
	"https://developers.google.com/oauthplayground"
);
OAuth2Client.setCredentials({ refresh_token: process.env.OAUTH2_REFRESH_TOKEN });
const accessToken = OAuth2Client.getAccessToken();
emailRouter.route("/send").post(async (req, res) => {
	console.log(req.body);
	const emailData = req.body;

	//exit if invalid data
	if (!emailData.emailBody) return res.status(400).send({ error: "Missing message body." });

	//SEND EMAIL
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
		from: emailData.senderEmail ? emailData.senderEmail : process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		subject: `Persweb email from ${emailData.senderName}`,
		text:
			emailData.emailBody +
			(emailData.senderEmail && emailData.senderEmail !== ""
				? `\n\nSender email: ${emailData.senderEmail}`
				: null)
	};
	//let emailResponse={success:false, response: null};
	transporter.sendMail(mailOptions, (err, emailRes) => {
		if (err) {
			emailResponse.respsonse = err;
			console.log("ERROR:", err);
			res.send({ error: "Email did not send successfully. (INTERNAL ERROR - DARN!!)" });
		}
		if (emailRes) {
			console.log("res.");
			//emailResponse ={success: true, response: res}
			res.send({ success: "Email sent successfully." });
		}
	});
});

module.exports = emailRouter;
