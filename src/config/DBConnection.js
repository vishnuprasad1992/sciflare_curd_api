const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const conn = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection successful'))
  .catch((err) =>
    console.log(`Mongo connection failed with below error :\n${err}`),
  );
module.exports = conn;
