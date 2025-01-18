module.exports = {
    // method of operation
    post: {
      tags: ["Cohort CRUD"], // operation's tag.
      description: "Create one cohort", // operation's desc.
      operationId: "createCohort", // unique operation id.
      parameters: [], // expected params.
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CohortModel", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        400: {
            description: "Invalid request",
        },

        200: {
          description: "Cohort was created", // response desc.
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