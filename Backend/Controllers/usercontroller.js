const User = require("../Models/usermodels");
const express = require("express");

const router = express.Router();

router.post("",async (req,res) => { 

  try{
   
    const userPost = await User.create(req.body);
    return res.status(200).send(userPost);
  }catch(err) { 
    return res.status(400).send({ message: err.message });
  }
})

router.get("", async function (req, res) {
  try {
    const userdata = await User.find();
    console.log(userdata);
    return res.status(200).send({ userdata });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
