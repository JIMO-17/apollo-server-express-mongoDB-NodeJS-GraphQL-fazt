const { connect } = require('mongoose');

const connectDB = async () => {
    try {
        await connect('mongodb+srv://JimoTodoChallenge:JimoTodoChallenge@testtodochallenge.xv9gv.mongodb.net/tasksdbGraph?authSource=admin&replicaSet=atlas-pa9ijp-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
    }
}

module.exports = { connectDB }