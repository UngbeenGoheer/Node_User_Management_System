const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb://localhost:27017" // Here You not add database name like correct URL will be mongodb://localhost:27017/UserManagementSystem
    );
    console.log(
      `DB Connected ||  DB host is  ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("An error occured while DB is connected"); // correct your message => "An error occured while connecting with db"
  }
};
module.exports = { connectDB };
