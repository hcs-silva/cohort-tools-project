const router = require("express").Router();

const StudentModel = require("../Models/StudentModel.js");

router.get("/", (req, res, next) => {
  StudentModel.find()
    .then((students) => {
      console.log("found the students", students);
      res.status(200).json(students);
    })
    .catch((err) => {
      // console.log(err);
      // res.status(500).json(err);
      next(err)
    });
});

router.post("/", (req, res, next) => {
  StudentModel.create(req.body)
    .then((createdStudent) => {
      res.status(201).json(createdStudent);
    })
    .catch((err) => {
      // console.log(err);
      // res.status(500).json(err);
      next(err)
    });
});

router.get("/cohort/:cohortId", (req, res, next) => {
  StudentModel.find({ cohort: req.params.cohortId })
    .populate("cohort")
    .then((student) => {
      if(student.length === 0) {
        res.status(404).json({ message: "Student not found" })
      }else res.status(200).json(student);
    })
    .catch((err) => {
      // console.log(err);
      // res.status(500).json(err);
      next(err)
    });
});

router.get("/:studentId", async (req, res,next) => {
  const studentId = req.params.studentId;
  try {
    const oneStudent = await StudentModel.findById(studentId);
    console.log(oneStudent);
    res.status(200).json(oneStudent);
  } catch (error) {
    // console.log(error);
    // res.status(500).json(error);
    next(error)
  }
});

router.put("/:studentId", async (req, res, next) => {
  const studentId = req.params.studentId;
  try {
    const updatedStudent = await StudentModel.findByIdAndUpdate(
      studentId,
      req.body,
      { new: true }
    );
    console.log(updatedStudent)
    res.status(204).json(updatedStudent)
  } catch (error) {
    // console.log(error);
    // res.status(500).json(error);
    next(error)
  }
});

router.delete("/:studentId", async (req, res, next) => {
    const studentId = req.params.studentId;
    try {
        const deletedStudent = await StudentModel.findByIdAndDelete(studentId)
        console.log(deletedStudent)
        res.status(204).json(deletedStudent)
    } catch (error) {
        // console.timeLog(error)
        // res.status(500).json(error)
        next(error)
    }
})

module.exports = router;
