module.exports = {
  // method of operation
  get: {
    tags: ["Cohort CRUD"], // operation's tag.
    description: "Get One Cohort Based on the ID of the cohort", // operation's desc.
    operationId: "getCohort", // unique operation id.
    parameters: [
      // expected params.
      {
        name: "_id",
        in: "path",
        required: true,
        schema: {
          type: "string",
          description: "A MongoDB ObjectId.",
          example: "64d9e3f2bcf86cd799439011",
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
      404: {
        description: "Cohort not found", // response desc.
      },
    },
  },
};
