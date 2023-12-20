const Orgs = require("../schema/organizationSchema");
Orgs;
const addOrgService = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newOrganization = new Orgs(data);
      await newOrganization.save();
      resolve(newOrganization);
    } catch (error) {
      reject(error.message);
    }
  });
};
const getOrgService = async (id) => {
  try {
    const data = await Orgs.findOne({ _id: id });
    return data;
  } catch (error) {
    return null;
  }
};
const geAllOrgsService = async (id) => {
  try {
    const data = await Orgs.find({});
    return data;
  } catch (error) {
    return null;
  }
};
const updateOrgService = async (id, updatedData) => {
  try {
    const data = await Orgs.updateOne(
      { _id: id },
      { $set: { ...updatedData } }
    );
    return data;
  } catch (error) {
    return null;
  }
};
const deleteOrgService = async (id) => {
  try {
    const data = await Orgs.deleteOne({ _id: id });
    return data;
  } catch (error) {
    return null;
  }
};
module.exports = {
  addOrgService,
  getOrgService,
  geAllOrgsService,
  updateOrgService,
  deleteOrgService,
};
