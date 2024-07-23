const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb://localhost:27017"
    );
    console.log(
      `DB Connected ||  DB host is  ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("An error occured while DB is connected");
  }
};
module.exports = { connectDB };
