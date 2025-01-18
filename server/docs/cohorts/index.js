const getCohort = require("./getCohort");
const getCohorts = require("./getCohorts");
const createCohort = require("./createCohort");
const updateCohort = require("./updateCohort");
const deleteCohort = require("./deleteCohort");

module.exports = {
  paths: {
    "/cohorts": {
      ...getCohorts,
      ...createCohort
    },
    "/cohorts/:cohortId": {
      ...getCohort,
      ...updateCohort,
      ...deleteCohort
    },
  },
};
