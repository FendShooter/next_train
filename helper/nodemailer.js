import nodemailer from 'nodemailer';
// require('dotenv').config({ path: './config/config.env' });
const sendEmail = async (options) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'oldhumblelion@gmail.com', // generated ethereal user
      pass: 'Humblelion', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let message = {
    from: 'oldhumblelion@gmail.com', // sender address
    to: 'virgile.dokouvi@gmail.com', // list of receivers
    subject: 'Your Quote', // Subject line
    // text: options.message, // plain text body
    html: options.html,
  };

  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
};

export default sendEmail;
