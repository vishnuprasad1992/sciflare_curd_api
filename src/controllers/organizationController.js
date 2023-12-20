const {
  addOrgService,
  getOrgService,
  geAllOrgsService,
  updateOrgService,
  deleteOrgService,
} = require("../services/orgServices");

const createOrg = async (req, res) => {
  await addOrgService(req.body);
  res.json({ success: true, message: "added successfully" });
};
const getOrg = async (req, res) => {
  const foundOrg = await getOrgService(req.params.id);
  if (foundOrg)
    res.json({
      success: true,
      message: "user fetched successfully",
      data: foundOrg,
    });
  else res.json({ success: false, message: "user fetch failed" });
};
const getAllOrgs = async (req, res) => {
  const orgData = await geAllOrgsService();
  if (orgData)
    res.json({
      success: true,
      message: "organizations fetched successfully",
      data: orgData,
    });
  else res.json({ success: false, message: "organizations fetch failed" });
};
const updateOrg = async (req, res) => {
  const userData = await updateOrgService(req.params.id, req.body);
  if (userData)
    res.json({
      success: true,
      message: "organization updated successfully",
    });
  else res.json({ success: false, message: "organization update failed" });
};
const assignUserToOrg = async (req, res) => {
  const userData = await updateOrgService(req.params.id, req.body);
  if (userData)
    res.json({
      success: true,
      message: "user assigned successfully",
    });
  else res.json({ success: false, message: "user assigned failed" });
};
const deleteOrg = async (req, res) => {
  const ack = await deleteOrgService(req.params.id);
  if (ack.deletedDoucument)
    res.json({
      success: true,
      message: "organization deleted successfully",
    });
  else
    res.json({
      success: false,
    });
};

module.exports = {
  createOrg,
  getOrg,
  getAllOrgs,
  updateOrg,
  assignUserToOrg,
  deleteOrg,
};
