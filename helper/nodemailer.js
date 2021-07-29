import nodemailer from 'nodemailer';
// require('dotenv').config({ path: './config/config.env' });
const sendEmail = async (options) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'oauth2.googleapis.com',
    // port: 465,
    // secure: true,
    auth: {
      user: process.env.SENDER, // generated ethereal user
      pass: process.env.MP, // generated ethereal password
      type: 'OAuth2',

      clientId:
        '16500300548-tggail8a7f1soo2vh04s8uq28npepdev.apps.googleusercontent.com',
      clientSecret: 'pJXwxyCAfAlfQpg59Hp9BhJc',
      refreshToken:
        '1//04c41u3Tu6HPWCgYIARAAGAQSNwF-L9IrBfrZ2Zf8vlU5kEQCyCZdHijYVtQtJSsZc0IhBVF-35zSpoj0znOfpeAIPjLVUOPHAjE',
      accessToken:
        'ya29.a0ARrdaM-c6HTWM8rhO7IVcXdaoKAqsgJNeJmKDV31NhgoJ876ja4Cq5ZuFcH8kBtuoK36L-CZg4DsdzdHYK8NbiMOeWhBezpa0PYPSp5S21WEuKA8xPNeAU9TcMc_M0f6X5Q3zGqoUsO507w4VGhfz6niK3gr',
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
