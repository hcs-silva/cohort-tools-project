const { Schema, model } = require("mongoose");

const studentSchema = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  linkedinUrl: { type: String, Default: "" },
  languages: {
    type: String,
    enum: [
      "English",
      "Spanish",
      "French",
      "German",
      "Portuguese",
      "Dutch",
      "Other",
    ],
  },
  program: {
    type: String,
    enum: ["Web Dev", "UX/UI", "Data Analytics", "Cybersecurity"],
  },
  background: { type: String, Default: "" },
  image: {type: String, Default: "https://i.imgur.com/r8bo8u7.png"},
  cohort: {type: Schema.Types.ObjectId,
    ref: "cohort"
  },
  projects: {type: Array}  
};

const StudentModel = model("student", studentSchema)
module.exports = StudentModel;