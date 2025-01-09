const router = require("express").Router();
const Cohort = require("../Models/CohortModel")

router.get("/", async (req, res) => {
    try{
        const cohortsFromDB = await Cohort.find()
        res.json(cohortsFromDB)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error getting cohorts" });
    }
});

router.get("/:slug", async (req, res) => {
    try{
        const cohort = await Cohort.findOne({cohortSlug: req.params.slug });

        if (!cohort) {
            return res.status(404).json({ message: "Cohort not found" });
        }

        req.json(cohort)
    }   catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error finding cohort" })
    }
});

router.post("/", async (req, res) => {
    try{
        const newCohort = new Cohort(req.body);

        const savedCohort = await newCohort.save();

        res.status(201).json(savedCohort);

    }   catch (err) {
            console.log(err)
            res.status(400).json({ message: "Error creating cohort"})
    }
})

router.put("/:slug", async (req, res) => {
    try {
        const updatedCohort = await Cohort.findOneAndUpdate(
            { cohortSlug: req.params.slug },
            req.body,
            { new: true }
        );

        if (!updatedCohort) {
            return res.status(404).json({ message: "Cohort not found" });
        }

        res.json(updatedCohort);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error updating cohort" });
    }
});

router.delete("/:slug", async (req, res) => {
    try {
        const deletedCohort = await Cohort.findOneAndDelete(
            { cohortSlug: req.params.slug }
        );

        if (!deletedCohort) {
            return res.status(404).json({ message: "Cohort not found" });
        }

        res.json({ message: "Cohort successfully deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting cohort" });
    }
});

module.exports = router;