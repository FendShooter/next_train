import path from 'path';
import fs from 'fs';
import Note from '../../models/Note';
import db_connect from '../../helper/db_connect';
import sendEmail from '../../helper/nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import nodemailer from 'nodemailer';

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
    
    const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey:
      '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',
  })
);

transport
  .sendMail({
    from: 'oldhumblelion@gmail.com',
    from: 'virgile.dokouvi@gmail.com',
    subject: 'hello world from me',
    html: `<h1 style="font-weight: bold;margin-bottom: 15px; font-size: 16px;">Client current location</h1>
<hr>
<h2 style="font-weight: bold;margin-bottom: 15px; font-size: 16px;">Ref: # <strong></strong></h1>
<h1>Current Location:</h1>
<div>Address From: <span></span> <span></span></div>
<div>House: <span></span> </div>
<div>Appartement: <span></span> </div>
<div>Address To: <span></span> <span></span></div>
<div>Date: <span></span> </div>

</div> `,
  })
  .then(() => {
    console.log('sent');
   note.save();

  //   res.status(201).json({ success: true, note });
  });
}

export default handler;

// if (req.method === 'POST') {
//   const { email } = req.body;
//   const client = new MongoClient('mongodb://localhost:27017/news');
//   await client.connect();
//   const db = client.db('news');
//   const collection = db.collection('letter');
//   const data = await collection.insertOne({ email });
//   const options = {
//     html: `<table style="width:100%; cellpadding:0; cellspacing:0">
//       <tbody>
//       <tr>
//       <td colspan="2" style="background:red; height:80px;">

//       </td>

//       </tr>
//       <tr>
//       <td>on</td>
//       <td>two</td>
//       </tr>
//       </tbody>

//       </table>
//       `,
//   };
//   await sendEmail(options);
//   res.status(201).json({ success: true, data });
// }
