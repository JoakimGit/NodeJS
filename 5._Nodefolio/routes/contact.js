const router = require("express").Router();
const nodemailer = require("nodemailer");
require('dotenv').config();


router.post("/api/contact", (req, res) => {
    const sender = req.body;    

    let transporter = nodemailer.createTransport({
        service: 'gmail',        
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: sender.name + ' ' + process.env.EMAIL,
        to: 'jokke34@gmail.com',
        subject: sender.subject,
        text: sender.message
    };

    transporter.sendMail(mailOptions, err => {
        if (err) {
            console.log('Error occured: ' + err);
        } else {
            console.log('Email sent!');
        }
    });
    
    console.log(req.body);
    res.redirect("/");
});

module.exports = {
    router
};