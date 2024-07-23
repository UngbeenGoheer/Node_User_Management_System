const { User } = require("../Models/models");

/**REgister User */
exports.registerUser = async (req, res) => {
  try {
    const { Name, Email, PhoneNo, CNIC, Role, Password, token } = req.body;
    const User = { Name, Email, PhoneNo, CNIC, Role, Password, token };
    const user = await User.create({});
    return res.status(200).json({
      message: "User Regsiter successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    console.log("Error while Registration", error);
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
