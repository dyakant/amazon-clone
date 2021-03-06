const router = require("express").Router();
const Category = require("../modules/category");

// POST request - create a new category
router.post("/categories", async (req, res) => {
  try {
    let category = new Category();

    category.type = req.body.type;

    await category.save();

    res.json({
      success: true,
      message: "Category was succesfully saved"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// GET request
router.get("/categories", async (req, rep) => {
  try {
    let categories = await Category.find();

    rep.json({
      success: true,
      categories: categories
    });
  } catch (error) {
    rep.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
