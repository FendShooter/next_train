import mongoose from 'mongoose';

const db_connect = async () => {
  if (mongoose.connection.readyState) {
    return;
  }
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default db_connect;
