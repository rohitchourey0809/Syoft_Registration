const express = require("express");
const Product = require("../Models/productmodel");
const authenticate = require("../middleware/authenticate");
const authorise = require("../middleware/authorise");

// const Product = require('../models/product.model');

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorise(["Admin", "Manager"]),
  async function (req, res) {
    try {
      const productdata = await Product.create(req.body);
      console.log("Productdata", productdata);
      return res.status(200).send(productdata);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);

router.get(
  "/",
  authenticate,
  authorise(["Admin", "Manager"]),
  async function (req, res) {
    try {
      const productdata = await Product.find();
      console.log("getproductdata0", getproductdata);
      return res.status(200).send(productdata);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);

router.patch(
  "/:id",
  authenticate,
  authorise(["Admin", "Manager"]),
  async function (req, res) {
    try {
      //   const productdata = await Product.findById(req.params.id).lean().exec()

      const productdata = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      console.log(req.params.id, "id");
      console.log("patch1:", productdata);
      return res.status(200).send(productdata);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);

module.exports = router;
