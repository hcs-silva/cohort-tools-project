const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors"); 
const helmet = require("helmet");
const PORT = 5005;

require("./db")
const cohortRoutes = require("./Routes/cohort.routes");
const studentRoutes = require("./Routes/student.routes")

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

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

app.get("/api/cohorts", (req, res) => {
  res.status(200).json(cohorts);
});

app.get("/api/students", (req, res) => {
  res.status(200).json(students);
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});