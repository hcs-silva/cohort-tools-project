const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  try {
    console.log("You are in the middleware")
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] == "Bearer"
    ) {
      const token = req.headers.authorization.split(" ")[1];
      const payload = jwt.verify(token, process.env.TOKEN_SECRET);

      console.log("Payload on verify", payload);
      req.payload = payload;
      next();
    }
  } catch (error) {
    console.log("Invalid token", error);
    res.status(401).json({ errorMessage: error });
  }
};

module.exports = { isAuthenticated };
