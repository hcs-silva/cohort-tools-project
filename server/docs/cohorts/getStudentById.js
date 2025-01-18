module.exports = {
  // method of operation
  get: {
    tags: ["Students CRUD"], // operation's tag.
    description: "Get One Student Based on the ID", // operation's desc.
    operationId: "getStudentById", // unique operation id.
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
        description: "A single Student id", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Student was obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/StudentModel", // Todo model
            },
          },
        },
      },
      404: {
        description: "Student not found", // response desc.
      },
    },
  },
};
