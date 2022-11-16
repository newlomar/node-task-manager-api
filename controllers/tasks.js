const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = (req, res) => {
    res.send('create task')
}

const getTask = (req, res) => {
    res.send('get single task')
}



module.exports = {
    getAllTasks,
}