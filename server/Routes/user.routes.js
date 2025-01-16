const router = require("express").Router();
const User = require("../Models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/:id", isAuthenticated, async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;