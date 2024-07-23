const express = require("express");
const { connectDB } = require("./DB/db");

const app = express();

/**Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**Server Setup */
const start = () => {
  try {
    connectDB();
    const PORT = 5000;
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  } catch (error) {
    console.log("An error Occured When Server is running");
  }
};
start();
