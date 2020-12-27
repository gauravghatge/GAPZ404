const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const URL = "mongodb+srv://guru404:j6KA2DmpNBScPIip@evento-webapp.hixrh.mongodb.net/evento?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    console.log("Connected to mongodb");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
