module.exports = {
    // operation's method
    put: {
      tags: ["Cohort CRUD"], // operation's tag
      description: "Update cohort", // short desc
      operationId: "updateCohort", // unique operation id
      parameters: [
        // expected params
        {
          name: "_id", // name of param
          in: "path", // location of param
          schema: {
            $ref: "#/components/schemas/CohortModel/_id", // id model
          },
          required: true, // mandatory
          description: "Id of cohort to be updated", // short desc.
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Cohort updated successfully", // response desc.
        },
        // response code
        404: {
          description: "Cohort not found", // response desc.
        },
        // response code
        500: {
          description: "Server error", // response desc.
        },
      },
    },
  };