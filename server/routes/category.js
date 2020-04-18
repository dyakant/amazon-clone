const router = require("express").Router();
const Category = require("../modules/category");

// POST request - create a new category
router.post('/categories', async (req, res) => {
    try {
        let category = new Category();

        category.type = req.body.type;

        await category.save();

        res.json({
            success: true,
            message: "Category was succesfully saved"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    };
});

// GET request
router.get('/categories', async (req, rep) => {
    try {
        let category = await Category.find();

        rep.json({
            success: true,
            category: category
        });
        
    } catch (error) {
        rep.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;