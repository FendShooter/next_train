import nodemailer from 'nodemailer';
// require('dotenv').config({ path: './config/config.env' });
const sendEmail = async (options) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER, // generated ethereal user
      pass: process.env.MP, // generated ethereal password
      type: 'OAuth2',

      clientId:
        '16500300548-tggail8a7f1soo2vh04s8uq28npepdev.apps.googleusercontent.com',
      clientSecret: 'pJXwxyCAfAlfQpg59Hp9BhJc',
      refreshToken:
        '1//049OVBmxjz6ALCgYIARAAGAQSNwF-L9Ir2Gh7PTJyYtQ3MjBk8W4c0yUcxiN2W0DG_A5rsupygoBN4XvfcukrR6CtvqINhwASgyE',
    },
  });

  // send mail with defined transport object
  let message = {
    from: process.env.SENDER, // sender address
    to: process.env.REC, // list of receivers
    subject: 'Your Quote', // Subject line
    // text: options.message, // plain text body
    html: options.html,
  };

  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
};

export default sendEmail;
