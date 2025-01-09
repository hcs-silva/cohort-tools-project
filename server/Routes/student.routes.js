const router = require("express").Router();

const StudentModel = require("../Models/StudentModel.js");

router.get("/", (req, res) => {
    StudentModel.find()
    .then((students) => {
        console.log("found the students", students)
        res.status(200).json(students);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err)
    })
})

router.post("/", (req, res) => {    
    StudentModel.create(req.body)
    .then((createdStudent) => {
        res.status(201).json(createdStudent)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get("/cohort/:cohortId", (req, res) => {
    console.log(req.params.cohortId)
    StudentModel.find({cohort: req.params.cohortId})
    .populate("cohort")
    .then((student) => {
        res.status(200).json(student)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;