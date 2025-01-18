const getCohort = require("./getCohortById");
const getCohorts = require("./getCohorts");
const createCohort = require("./createCohort");
const updateCohort = require("./updateCohort");
const deleteCohort = require("./deleteCohort");

const createStudent = require("./createStudent");
const getStudents = require("./getStudents");
const getStudentById = require("./getStudentById");
const updateStudent = require("./updateStudent");
const deleteStudent = require("./deleteStudent");
const getStudentsByCohort = require("./getStudentsByCohort");

module.exports = {
  paths: {
    "/cohorts": {
      ...getCohorts,
      ...createCohort,
    },
    "/cohorts/:cohortId": {
      ...getCohort,
      ...updateCohort,
      ...deleteCohort,
    },
    "/students": {
      ...getStudents,
      ...createStudent,
    },
    "/students/:cohortId": {
      ...getStudentsByCohort,
    },
    "/students/:studentId": {
      ...getStudentById,
      ...updateStudent,
      ...deleteStudent,
    },
  },
};
