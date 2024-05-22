const Product = require("../Models/productmodel");

const getAllProducts = async (req, res) => {
  try {
    console.log("req",req);
    const productData = await Product.find();
    console.log(productData);
    return res.status(200).send({ productData });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const postAllProducts = async function (req, res) {
  try {
    const productdata = await Product.create(req.body);
    console.log("Productdata", productdata);
    return res.status(200).send(productdata);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};


const patchAllProducts = async (req, res) => {
  try {
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
};




module.exports = {
  getAllProducts,
  postAllProducts,
  patchAllProducts,
};
