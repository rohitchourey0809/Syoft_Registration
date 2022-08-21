const express = require("express");
var bodyParser = require("body-parser");
// const path = require("path");
// const favicon = require("serve-favicon");
const connect = require("./Config/db");
const Usercontroller = require("./Controllers/usercontroller");
const Productcontroller = require("./Controllers/productcontroller");

const app = express();
const cors = require("cors");
const { register, login } = require("./Controllers/authcontroller");
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

let port = process.env.PORT || 8080;
app.use(express.json());

// app.use(favicon(path.join(dirname, "build", "favicon.ico")));
// app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/users", Usercontroller);
app.post("/register", register);
app.post("/login", login);
app.use("/product", Productcontroller);
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });
app.post("/product", Productcontroller);

app.listen(port, async () => {
  try {
    console.log(`listening on port ${port}`);
    await connect();
  } catch (err) {
    console.log(err);
  }
});
