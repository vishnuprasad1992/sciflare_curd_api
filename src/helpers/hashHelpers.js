const bcrypt = require("bcrypt");

async function hashPassword(password) {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (error) {
    console.error(err.message);
  }
}

async function compareHash(hash, password) {
  try {
    const compared = await bcrypt.compare(password, hash);
    return compared
  } catch (error) {
    console.error(err.message);
  }
}

module.exports = { hashPassword, compareHash };
