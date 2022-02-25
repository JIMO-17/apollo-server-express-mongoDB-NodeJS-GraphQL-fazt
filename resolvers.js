const Task = require('./models/Task')

const resolvers = {
    Query: {
        hello: () => 'Hello Word',
        getAllTasks: async () => {
            const tasks = await Task.find()
            return tasks
        },
        async getTaskById(_, args){
            const { id } = args;
            const task = await Task.findById(id)
            return task
        }
    },
    Mutation: {
        createTask: async (_, args) => {
            const {title, description} = args
            const newTask = new Task({title, description})
            await newTask.save()
            return newTask
        }
    }
}

module.exports = { resolvers };