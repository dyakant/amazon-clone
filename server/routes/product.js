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
router.get('/products', async (req, rep) => {
    try {
        let products = await Product.find();

        rep.json({
            success: true,
            products: products
        });

    } catch (error) {
        rep.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// GET request - request a single product
router.get('/products/:id', async (req, rep) => {
    try {
        let product = await Product.findOne({ _id: req.params.id });

        rep.json({
            success: true,
            product: product
        });

    } catch (error) {
        rep.status(500).json({
            success: false,
            message: err.message
        });
    }
}); 

// PUT request - update a single product


// DELETE request - delete a single product

module.exports = router;