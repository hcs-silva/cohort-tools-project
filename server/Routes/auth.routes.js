const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User.model");

router.post("/signup", async (req, res, next) => {
    try {
        const{ email, password, name } = req.body;

        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            name
        })

        res.status(201).json({
            _id: newUser._id,
            email: newUser.email,
            name: newUser.name
        });
    }

    catch (err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user._id }, 
            process.env.TOKEN_SECRET, 
            { expiresIn: "1h" }
        );

        res.json({ token });

    } catch (err) {
        next(err);
    }
});

router.get("/verify", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        res.json({ userId: decoded.userId });
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
});

module.exports = router;