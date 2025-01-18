module.exports = {
    // operation's method.
    delete: {
      tags: ["Cohort CRUD"], // operation's tag
      description: "Deleting a cohort", // short desc
      operationId: "deleteCohort", // unique operation id
      parameters: [
        // expected parameters
        {
          name: "_id", // name of param
          in: "path", // location of param
          schema: {
            $ref: "#/components/schemas/CohortModel/_id", // id model
          },
          required: true, // mandatory
          description: "Deleting a cohort", // param desc
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Cohort deleted successfully", // response desc
        },
        // response code
        404: {
          description: "Cohort not found", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };