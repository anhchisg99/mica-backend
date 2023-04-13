import nodemailer from 'nodemailer'


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anhchictw311@gmail.com',
        pass: 'afniffpbbfliecuc'
    }
});

// var mailOptions = {
//     from: 'anhchictw311@gmail.com',
//     to: 'cuongcuoi1010@gmail.com',
//     subject: 'Sending Email using Node.js',  
//     text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

export default transporter;