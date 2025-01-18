module.exports = {
    // method of operation
    //TODO: implement the correct type in the models
    //TODO: Correct documentation regarding student creation
    post: {
      tags: ["Students CRUD"], // operation's tag.
      description: "Create one student", // operation's desc.
      operationId: "createStudent", // unique operation id.
      parameters: [], // expected params.
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/StudentModel", // todo input data model
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

        201: {
          description: "Student was created", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/StudentModel", // Todo model
              },
            },
          },
        },
      },
    },
  };