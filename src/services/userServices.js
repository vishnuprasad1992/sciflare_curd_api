const Users = require("../schema/userSchema");

const addUserService = async (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newUser = new Users(userData);
      await newUser.save();
      resolve(newUser);
    } catch (error) {
      reject(error.message);
    }
  });
};
const getUserService = async (id) => {
  try {
    const data = await Users.findOne({ _id: id });
    return data;
  } catch (error) {
    return null;
  }
};
const getUserByEmailService = async (email) => {
  try {
    const data = await Users.findOne({ email });
    return data;
  } catch (error) {
    return null;
  }
};
const geAllUserService = async (id) => {
  try {
    const data = await Users.find({});
    return data;
  } catch (error) {
    return null;
  }
};
const updateUserService = async (id,updatedData) => {
    try {
      const data = await Users.updateOne({ _id: id },{$set:{...updatedData}});
      return data;
    } catch (error) {
      return null;
    }
  };
  const deleteUserService = async (id) => {
    try {
      const data = await Users.deleteOne({ _id: id });
      return data;
    } catch (error) {
      return null;
    }
  };
module.exports = { addUserService, getUserService,geAllUserService,updateUserService,deleteUserService ,getUserByEmailService};
