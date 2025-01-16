module.exports = {
  components: {
    schemas: {
      // cohort model
      Cohort: {
        type: "object",
        properties: {
          cohortSlug: {
            type: "string",
            description: "Unique Identifier of the cohort",
          },
          cohortName: {
            type: "string",
            description: "Name of the Cohort",
          },
          program: {
            type: "string",
            description: "type of the program",
            example: "Web Dev, UI/UX",
          },
          campus: {
            type: "string",
            description: "Name of the Campus",
          },
          startDate: {
            type: "string",
            description: "The current date",
          },
          endDate: {
            type: "string",
            description: "The final date of the cohort",
          },
          inProgress: {
            type: "boolean",
            description: "Is it ongoing?",
          },
          programManager: {
            type: "string",
            description: "Name of The Program Manager",
          },
          leadTeacher: {
            type: "string",
            description: "Name of the lead Teacher",
          },
          totalHours: {
            type: "number",
            description: "total number of hours of the cohort",
          },
        },
      },
      // student model
      StudentModel: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            description: "The first name of the student",
          },
          lastName: {
            type: "string",
            description: "The last name of the student",
          },
          email: {
            type: "string",
            description: "The students' email",
          },
          phone: {
            type: "string",
            description: "the students' telephone number",
            example: "912345678",
          },
          linkedinUrl: {
            type: "string",
            description: "URL to the students' LinkedIn profile",
          },
          languages: {
            type: "array of strings",
            description: "The languages the student speaks",
            example:
              "English, Spanish, French, German,  Portuguese,  Dutch, Other",
          },
          program: {
            type: "string",
            description: "The program the student is enrolled in",
            example: "Web Dev, UX/UI, Data Analytics, Cybersecurity",
          },
          background: {
            type: "string",
            description: "If the students have any background on the subjects",
          },
          image: {
            type: "string",
            description: "The students' image",
          },
          cohort: {
            type: "string",
            description: "the id of the cohort in the Database",
          },
          projects: {
            type: "array of projects",
            description: "The projects the student has completed",
          },
        },
      },
      // Todo input model
      TodoInput: {
        type: "object", // data type
        properties: {
          title: {
            type: "string", // data type
            description: "Todo's title", // desc
            example: "Coding in JavaScript", // example of a title
          },
          completed: {
            type: "boolean", // data type
            description: "The status of the todo", // desc
            example: false, // example of a completed value
          },
        },
      },
      // error model
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};
