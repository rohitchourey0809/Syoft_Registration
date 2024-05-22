const express = require("express");
const ProductallController = require("../Controllers/productcontroller");
const authenticate = require("../middleware/authenticate");
const authorise = require("../middleware/authorise");

const router = express.Router();

// <------------------------Productapi--------------------------------------->
router.get(
  "/",
//   authenticate,
//   authorise(["Admin", "Manager"]),
  ProductallController.getAllProducts
);

router.post(
  "/",
//   authenticate,
//   authorise(["Admin", "Manager"]),
  ProductallController.postAllProducts
);

router.patch(
  "/:id",
//   authenticate,
//   authorise(["Admin", "Manager"]),
  ProductallController.patchAllProducts
);

module.exports = router;
