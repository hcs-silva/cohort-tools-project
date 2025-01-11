const router = require("express").Router();
const Cohort = require("../Models/CohortModel")

router.get("/", async (req, res) => {
    try{
        const cohortsFromDB = await Cohort.find()
        res.status(200).json({
            message: "Cohorts retrieved successfully",
            data: cohortsFromDB
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "Error getting cohorts",
            error: err.message 
        });
    }
});

router.get("/:slug", async (req, res) => {
    try {
        const cohort = await Cohort.findOne({ cohortSlug: req.params.slug });

        if (!cohort) {
            return res.status(404).json({
                message: "Cohort not found"
            });
        }

        res.status(200).json({
            message: "Cohort retrieved successfully",
            data: cohort
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error finding cohort",
            error: err.message
        });
    }
});

router.post("/", async (req, res) => {
    try{
        const newCohort = new Cohort(req.body);
        const savedCohort = await newCohort.save();

        res.status(201).json({
            message: "Cohort created successfully",
            data: savedCohort
        });
    }   catch (err) {
            console.log(err)
            res.status(400).json({
                message: "Error creating cohort",
                error: err.message
            });
    }
});

router.put("/:slug", async (req, res) => {
    try {
        const updatedCohort = await Cohort.findOneAndUpdate(
            { cohortSlug: req.params.slug },
            req.body,
            { new: true }
        );

        if (!updatedCohort) {
            return res.status(404).json({
                message: "Cohort not found"
            });
        }

        res.status(200).json({
            message: "Cohort updated successfully",
            data: updatedCohort
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Error updating cohort",
            error: err.message
        });
    }
});

router.delete("/:slug", async (req, res) => {
    try {
        const deletedCohort = await Cohort.findOneAndDelete(
            { cohortSlug: req.params.slug }
        );

        if (!deletedCohort) {
            return res.status(404).json({
                message: "Cohort not found"
            });
        }

        res.status(200).json({
            message: "Cohort deleted successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error deleting cohort",
            error: err.message
        });
    }
});

module.exports = router;