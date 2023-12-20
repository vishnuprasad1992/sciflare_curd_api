const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let authorization = req.headers.authorization.replace("Bearer ", "");
  const verify = jwt.verify(authorization, process.env.JWT_SECRET);
  if (verify) {
    req.user = verify;
    next();
  } else {
    res.status(401).json({ error: "token expired" });
  }
};
const authAdmin = (req, res, next) => {
  let authorization = req.headers.authorization.replace("Bearer ", "");
  const verify = jwt.verify(authorization, process.env.JWT_SECRET);
  if (verify.role == "admin") {
    req.user = verify;
    next();
  } else {
    res.status(401).json({ error: "not an admin user" });
  }
};
module.exports = {
  auth,
  authAdmin,
};
