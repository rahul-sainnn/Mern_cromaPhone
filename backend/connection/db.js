const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    //console.log(conn);
    console.log(
      (`Connected to MongoDB ${conn.connection.host}`)
    );
  } catch (error) {
    console.error((`Error in connection ${error}`));
  }
};


module.exports = connectDB;