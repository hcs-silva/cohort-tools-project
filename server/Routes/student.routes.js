const router = require("express").Router();

const StudentModel = require("../Models/StudentModel.js");

router.get("/api/students", (req, res) => {
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

router.post("/api/students", (req, res) => {    
    StudentModel.create(req.body)
    .then((createdStudent) => {
        res.status(201).json(createdStudent)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
})