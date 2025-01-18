module.exports = {
    // method of operation
    get: {
      tags: ["Cohort CRUD"], // operation's tag.
      description: "Get all the cohorts", // operation's desc.
      operationId: "getCohorts", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "Cohorts were obtained", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CohortModel", // Todo model
              },
            },
          },
        },
      },
    },
  };