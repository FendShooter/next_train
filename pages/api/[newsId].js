import Note from '../../models/Note';

const handler = async (req, res) => {
  console.log(req.query);
  const { newsId } = req.query;

  if (req.method === 'GET') {
    await Note.findByIdAndDelete({ _id: newsId });
    const newState = await Note.find();
    res.status(200).json({ success: true, newState });
  }
};

export default handler;
