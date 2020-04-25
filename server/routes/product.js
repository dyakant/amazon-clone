const router = require("express").Router();
const Product = require("../modules/product");
const upload = require("../middlewares/upload-photo");

// POST request - create a new product
//
router.post("/products", upload.single("photo"), async (req, res) => {
  try {
    let product = new Product();
    product.ownerID = req.body.ownerID;
    product.categoryID = req.body.categoryID;
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.file.location;
    product.price = req.body.price;
    product.stockQuantity = req.body.stockQuantity;

    await product.save();

    res.json({
      status: true,
      message: "Succesfully saved"
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message
    });
  }
});

// GET request - request all products
router.get("/products", async (req, rep) => {
  try {
    let products = await Product.find();

    rep.json({
      success: true,
      products: products
    });
  } catch (error) {
    rep.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// GET request - request a single product
router.get("/products/:id", async (req, rep) => {
  try {
    let product = await Product.findOne({
      _id: req.params.id
    });

    rep.json({
      success: true,
      product: product
    });
  } catch (error) {
    rep.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// PUT request - update a single product
router.put("/products/:id", upload.single("photo"), async (req, rep) => {
  try {
    let product = await Product.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          photo: req.file.location,
          price: req.body.price,
          stockQuantity: req.body.stockQuantity,
          category: req.body.category,
          owner: req.body.owner
        }
      },
      {
        upsert: true
      }
    );

    rep.json({
      success: true,
      updatedProduct: product
    });
  } catch (error) {
    rep.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// DELETE request - delete a single product
router.delete("/products/:id", async (req, res) => {
  try {
    let deletedProduct = await Product.findOneAndDelete({
      _id: req.params.id
    });

    if (deletedProduct) {
      res.json({
        success: true,
        deletedProduct: deletedProduct,
        message: "Successfully deleted"
      });
    } else {
      res.json({
        success: true,
        message: "Product was not found"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
