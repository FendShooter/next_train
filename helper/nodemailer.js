import nodemailer from 'nodemailer';
// require('dotenv').config({ path: './config/config.env' });
const sendEmail = async (options) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER, // generated ethereal user
      pass: process.env.MP, // generated ethereal password
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
