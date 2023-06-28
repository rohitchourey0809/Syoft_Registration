const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://rohit1995chourey:rohit321@nodeapp.r62ctns.mongodb.net/?retryWrites=true&w=majority"
    
  );
};

module.exports = connect;
