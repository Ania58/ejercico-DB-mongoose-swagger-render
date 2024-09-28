module.exports = {
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Unique id for the task',
              example: '6201064b0028de7866e2b2c4'
            },
            title: {
              type: 'string',
              description: 'Title of the task',
              example: 'Call Mom'
            },
            completed: {
              type: 'boolean',
              description: 'Indicates whether the task is completed',
              example: false
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Timestamp when the task was created',
              example: '2024-09-28T12:00:00Z'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Timestamp when the task was last updated',
              example: '2024-09-28T12:30:00Z'
            }
          }
        }
      }
    }
  };