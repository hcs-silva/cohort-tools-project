const mongoose = require('mongoose');
const Cohort = require('./Models/CohortModel');
const cohorts = require('./cohorts.json');

require('./db');  // Your database connection

const seedDatabase = async () => {
    try {
        // Clear existing data
        await Cohort.deleteMany();

        // Remove _id and normalize campus names
        const cohortsWithoutId = cohorts.map(cohort => {
            const { _id, ...cohortWithoutId } = cohort;
            return {
                ...cohortWithoutId,
                campus: cohortWithoutId.campus === 'BERLIN' ? 'Berlin' : cohortWithoutId.campus
            };
        });

        // Insert cohorts
        const createdCohorts = await Cohort.create(cohortsWithoutId);
        console.log(`Created ${createdCohorts.length} cohorts`);
        console.log('Sample cohort _id:', createdCohorts[0]._id);

        console.log('Database seeded!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();