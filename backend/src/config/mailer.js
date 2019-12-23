const nodemailer = require('nodemailer')

let adminEmail = process.env.MAIL_USER;
let adminPassword = process.env.MAIL_PASSWORD;
let mailHost = process.env.MAIL_HOST;
let mailPort = process.env.MAIL_PORT;

// enable  less secure apps
// https://www.google.com/settings/security/lesssecureapps
// https://community.nodemailer.com/using-gmail/

let sendMail = (to, subject, htmlContent)=>{
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });
    let options = {
        from: process.env.MAIL_USER,
        to: to,
        subject,
        html: htmlContent
    };
    return transporter.sendMail(options); // This default return a promise
}
module.exports = sendMail;
