const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
  {
    organization_name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    users:[{type:mongoose.Schema.Types.ObjectId,ref: 'Users'}]
  },
  { timestamps: true }
);

const Orgs = new mongoose.model("Organization", organizationSchema);
module.exports=Orgs