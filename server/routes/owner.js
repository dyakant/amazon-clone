const router = require("express").Router();
const Owner = require("../modules/owner");
const upload = require("../middlewares/upload-photo");

// POST request - create a new category
router.post("/owners", upload.single("photo"), async (req, res) => {
  try {
    let owner = new Owner();

    owner.name = req.body.name;
    owner.about = req.body.about;
    owner.photo = req.file? req.file.location: null;

    await owner.save();

    res.json({
      success: true,
      message: "Owner was succesfully saved"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// GET request
router.get("/owners", async (req, rep) => {
  try {
    let owners = await Owner.find();

    rep.json({
      success: true,
      owners: owners
    });
  } catch (error) {
    rep.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
