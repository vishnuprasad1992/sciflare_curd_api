const { hashPassword, compareHash } = require("../helpers/hashHelpers");
const {
  addUserService,
  getUserService,
  geAllUserService,
  updateUserService,
  deleteUserService,
  getUserByEmailService,
} = require("../services/userServices");

const jwt = require("jsonwebtoken");

const login = async (req, res) => {

  try {
    const body = { ...req.body };
    const user = await getUserByEmailService(body.email);
    if (!user) {
      return res.status(401).json({
        status: "ERROR",
        message: "You are not Registered User",
      });
    } else {
      // generate the JWT token. this will be saved in localstorage
      const compared = await compareHash(user.password, body.password);
      if (compared) {
        const token = jwt.sign(
          { userName: user.name, userId: user._id ,role:user.role},
          process.env.JWT_SECRET
        );
        return res.status(200).json({
          status: "SUCCESS",
          token: token,
          userData: {
            name: user.name,
            id: user._id,
            email: user.email,
            mobile: user.mobile,
            role: user.role,
          },
        });
      }
      return res.status(200).json({
        error: "email or password not matching",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const registerUser = async (req, res) => {
  const body = { ...req.body };
  if (body.password) {
    const hashed = await hashPassword(body.password);
    body.password = hashed;
  }
  await addUserService(body);
  res.json({ success: true, message: "added successfully" });
};
const getUser = async (req, res) => {
  const foundUser = await getUserService(req.params.id);
  if (foundUser)
    res.json({
      success: true,
      message: "user fetched successfully",
      data: foundUser,
    });
  else res.json({ success: false, message: "user fetch failed" });
};
const getAllUsers = async (req, res) => {
  const userData = await geAllUserService();
  if (userData)
    res.json({
      success: true,
      message: "users fetched successfully",
      data: userData,
    });
  else res.json({ success: false, message: "users fetch failed" });
};
const updateUser = async (req, res) => {
  const userData = await updateUserService(req.params.id, req.body);
  if (userData)
    res.json({
      success: true,
      message: "user updated successfully",
    });
  else res.json({ success: false, message: "user update failed" });
};
const deleteUser = async (req, res) => {
  const ack = await deleteUserService(req.params.id);
  if (ack.deletedDoucument)
    res.json({
      success: true,
      message: "user deleted successfully",
    });
  else
    res.json({
      success: false,
    });
};
module.exports = {
  registerUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
};
