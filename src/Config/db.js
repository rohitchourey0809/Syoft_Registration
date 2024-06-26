const mongoose = require("mongoose");
// const dotenv = require("dotenv");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(process.env.MONGO_URI);
};

module.exports = connect;
