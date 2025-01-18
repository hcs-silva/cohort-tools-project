module.exports = {
    // method of operation
    get: {
      tags: ["Cohort CRUD"], // operation's tag.
      description: "Get One Cohort Based on the ID of the cohort", // operation's desc.
      operationId: "getCohort", // unique operation id.
      parameters: [
        // expected params.
        {
          name: "_id", // name of the param
          in: "path", // location of the param
          schema: {
            $ref: "#/components/schemas/CohortModel/_id", // data model of the param
          },
          required: true, // Mandatory param
          description: "A single cohort id", // param desc.
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Cohort was obtained", // response desc.
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