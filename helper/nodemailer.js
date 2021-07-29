import nodemailer from 'nodemailer';
// require('dotenv').config({ path: './config/config.env' });
const sendEmail = async (options) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: 'smtp.gmail.com',
    // port: 25,
    auth: {
      user: process.env.SENDER, // generated ethereal user
      pass: process.env.MP, // generated ethereal password
      type: 'OAuth2',

      clientId:
        '16500300548-1imsu2bruhau3hekh13s255ghltet683.apps.googleusercontent.com',
      clientSecret: 'Bm5BJxcAo2whCxz5YN8730q8',
      refreshToken:
        '1//04viLr_SZbpOFCgYIARAAGAQSNwF-L9IrOAm58KfKwbOT3m93WeCE9Vyly7vYLU6e7gQexKRGmnj6buLxK_hf5qzlzgOL7xFDcqo',
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
