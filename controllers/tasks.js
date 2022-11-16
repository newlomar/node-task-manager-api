const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = (req, res) => {
    res.send('create task')
}


module.exports = {
    getAllTasks,
}