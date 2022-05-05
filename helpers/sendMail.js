const nodemailer = require('nodemailer');
const {
    nodemailer_pass
} = require('../secrets');


module.exports = async function sendMail(mailId, mailDetails) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587, // free protocol
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'shreyanshthakur1@gmail.com', // generated ethereal user
            pass: nodemailer_pass, // generated ethereal password
        },
    });

    // console.log(mailDetails);


    for (let i = 0; i < mailDetails.length; i++) {
        let info = await transporter.sendMail({
            from: '"Curelink" <shreyanshthakur1@gmail.com>', // sender address
            to: mailId,
            subject: "You have got a new newsletter!!!",
            text: `${mailDetails[i].content}`
        });
        console.log("->", info.messageId)

    }





}