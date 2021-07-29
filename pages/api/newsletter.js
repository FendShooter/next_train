import path from 'path';
import fs from 'fs';
import Note from '../../models/Note';
import db_connect from '../../helper/db_connect';
import sendEmail from '../../helper/nodemailer';
    import sgMail from '@sendgrid/mail';


db_connect();

export const getData = () => {
  const pathfile = path.join(process.cwd(), '/data/data.json');
  const readFile = fs.readFileSync(pathfile, 'utf-8');
  const { companies } = JSON.parse(readFile);
  return companies;
};
async function handler(req, res) {
  if (req.method === 'GET') {
    // const companies = getData();
    const note = await Note.find();
    res.status(200).json({ success: true, note });
  }
  if (req.method === 'POST') {
    const note = await new Note(req.body);

    sgMail.setApiKey(
      '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'
    );
    const msg = {
      from: 'gildryx8@yahoo.fr', // Change to your recipient
      to: 'oldhumblelion@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });

    await note.save();
    res.status(201).json({ success: true, note });
  }
}
export default handler;


//   const options = {
    //     html: `<table style="width:100%; cellpadding:0; cellspacing:0">
    //     <tbody>
    //     <tr>
    //     <td colspan="2" style="background:red; height:80px;">
    //     </td>
    //     </tr>
    //     <tr>
    //     <td>on</td>
    //     <td>two</td>
    //     </tr>
    //     </tbody>

    //     </table>
    //     `,
    //   };
    //   await sendEmail(options);
    //   await note.save();

    //   res.status(201).json({ success: true, note });
    // }