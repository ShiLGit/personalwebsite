const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

    }
})

console.log(process.env.EMAIL_USER, process.env.EMAIL_PW)