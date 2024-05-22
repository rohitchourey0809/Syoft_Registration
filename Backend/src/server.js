const express = require("express");
let bodyParser = require("body-parser");

const connect = require("./Config/db");
const Userroutes = require("./routes/userroute");
const Productroutes = require("./routes/productroutes");
const Registerroutes = require("./routes/registerroute");
const Loginroutes = require("./routes/registerroute");

const app = express();
const cors = require("cors");
// const { register, login } = require("./Controllers/authcontroller");

app.use(
  cors({
    credentials: true,
  })
);

let port = process.env.PORT || 8080;
app.use(express.json());

app.use(bodyParser.json());

app.use("/users", Userroutes);
app.use("/products", Productroutes);
app.use("/register", Registerroutes);
app.use("/login", Loginroutes);

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("connected");
    console.log(port);
  } catch (err) {
    console.log(err);
  }
});
