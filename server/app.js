const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const PORT = 5005;
require("dotenv").config();

require("./db");
const cohortRoutes = require("./Routes/cohort.routes");
const studentRoutes = require("./Routes/student.routes");
const authRoutes = require("./Routes/auth.routes");
const userRoutes = require("./Routes/user.routes");

const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");

// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// ...
const cohorts = require("./cohorts.json");
const students = require("./students.json");

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(
  //LEARNING DIFFERENT MIDDLEWARES
  helmet({
    // Configures Content Security Policy
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"], // Only allow resources from same origin
        scriptSrc: ["'self'", "'unsafe-inline'"], // Allow inline scripts and same origin
        styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles and same origin
        imgSrc: ["'self'", "data:", "https:"], // Allow images from same origin, data URLs, and HTTPS
        connectSrc: ["'self'", "http://localhost:5173"], // Allow connections to self and your frontend
      },
    },
    // Helps prevent clickjacking attacks
    frameguard: {
      action: "deny", // Prevents your page from being embedded in iframes
    },
    // Sets X-DNS-Prefetch-Control header
    dnsPrefetchControl: {
      allow: false, // Disables DNS prefetching
    },
    // Removes X-Powered-By header
    hidePoweredBy: true,
    // Sets Strict-Transport-Security header
    hsts: {
      maxAge: 31536000, // 1 year in seconds
      includeSubDomains: true,
      preload: true,
    },
  })
);

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true, //allows for cookies and auth
    maxAge: 86400, //reduces server load by only caching for 24hours
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet()); //security

// ROUTES - https://expressjs.com/en/starter/basic-routing.html
// Devs Team - Start working on the routes here:
// ...
app.use("/api/students", studentRoutes);
app.use("/api/cohorts", cohortRoutes);
app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

const {
  errorHandler,
  notFoundHandler,
} = require("./middleware/error-handling");

app.use(errorHandler);
app.use(notFoundHandler);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
