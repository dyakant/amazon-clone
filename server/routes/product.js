const router = require("express").Router();
const Product = require("../modules/product");
const upload = require("../middlewares/upload-photo");

// POST request - create a new product
// 
router.post('/products',  upload.single("photo"), async (req, res) => {
    try {
        let product = new Product();
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


// GET request - request a single product


// PUT request - update a single product


// DELETE request - delete a single product

module.exports = router;