module.exports = {
    paths: {
        "/create": {
            post: {
                tags: ["Tasks"],
                description: "Create Task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Task created successfully",
                    },
                    500: {
                        description: "There was a problem trying to create a task",
                    },
                },
            },
        },
        "/": {
            get: {
                tags: ["Tasks"],
                description: "Get all tasks",
                operationId: "getTasks",
                parameters: [],
                responses: {
                    200: {
                        description: "List of tasks",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task",
                                },
                            },
                        },
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
        "/id/{_id}": {
            get: {
                tags: ["Tasks"],
                description: "Get a specific task",
                operationId: "getATask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                        description: "Task ID to retrieve",
                    },
                ],
                responses: {
                    200: {
                        description: "Task retrieved successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task",
                                },
                            },
                        },
                    },
                    500: {
                        description: "There was a problem finding the task with the requested _id",
                    },
                },
            },
            put: {
                tags: ["Tasks"],
                description: "Update task title",
                operationId: "updateTaskTitle",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                        description: "Task ID to update",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    title: {
                                        type: "string",
                                        description: "Updated task title",
                                        example: "New Task Title",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Task title updated successfully",
                    },
                    500: {
                        description: "There was a problem trying to update the task with the requested id",
                    },
                },
            },
            delete: {
                tags: ["Tasks"],
                description: "Delete a task",
                operationId: "deleteTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                        description: "Task ID to delete",
                    },
                ],
                responses: {
                    200: {
                        description: "Task deleted successfully",
                    },
                    500: {
                        description: "There was a problem trying to delete a task",
                    },
                },
            },
        },
        "/markAsCompleted/{_id}": {
            put: {
                tags: ["Tasks"],
                description: "Update task completion",
                operationId: "updateTaskAsCompleted",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                        description: "Task ID to mark as completed",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    completed: {
                                        type: "boolean",
                                        description: "Mark task as completed",
                                        example: true,
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Task marked as completed successfully",
                    },
                    500: {
                        description: "There was a problem trying to mark the task as completed",
                    },
                },
            },
        },
    },
};