import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'email field is required'],
  },
});

export default mongoose.models.Note || mongoose.model('Note', noteSchema);
