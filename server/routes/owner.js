const router = require("express").Router();
const Owner = require("../modules/owner");
const upload = require("../middlewares/upload-photo");

// POST request - create a new category
router.post('/owners', upload.single("photo"), async (req, res) => {
    try {
        let owner = new Owner();

        owner.name = req.body.name;
        owner.about = req.body.about;
        owner.photo = req.file.location;

        await owner.save();

        res.json({
            success: true,
            message: "Owner was succesfully saved"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    };
});

// GET request
router.get('/owners', async (req, rep) => {
    try {
        let owner = await Owner.find();

        rep.json({
            success: true,
            owner: owner
        });

    } catch (error) {
        rep.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;