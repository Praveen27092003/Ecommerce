const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDatabase = () => {

  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`MongoDB is connected to the host: ${con.connection.host}`);
    })
    .catch((err) => {
      console.error('MongoDB Connection Error:', err);
      process.exit(1);  // Exit the process if MongoDB connection fails
    });
};

module.exports = connectDatabase;
