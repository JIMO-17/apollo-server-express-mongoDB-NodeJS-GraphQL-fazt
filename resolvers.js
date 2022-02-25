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
            const {title, description} = args.task
            const newTask = new Task({title, description})
            await newTask.save()
            return newTask
        },
        async deleteTask(_, {id}) {
            await Task.findByIdAndDelete(id);
            return `Task deleted with id: ${id}`
        },
        async updateTask(_, {task, id}){
            const updateTask = await Task.findByIdAndUpdate(id, {$set: task}, {new: true})
            return updateTask
        }
    }
}

module.exports = { resolvers };