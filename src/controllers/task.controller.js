import TaskModel from '../models/task.model';

export const getTasks = async (req, res) => {
    try {
        let gotTasks = await TaskModel.findAll();
        return res.status(200).json(gotTasks);
    } catch (error) {
        return res.status(500).json({
            message: `Error: ${error}`
        })
    }
}

export const getTaskById = async (req, res) => {
    let { id } = req.params;
    let currentTaks = await TaskModel.findOne({
        where: {
            id
        }
    });
    if (currentTaks) {
        try {
            let { id } = req.params;
            let gotTask = await TaskModel.findOne({
                where: {
                    id
                }
            });
            return res.status(200).json(gotTask);
        } catch (error) {
            return res.status(500).json({
                message: `Error: ${error}`
            })
        }
    } else {
        return res.status(404).json({
            message: `Task not found`
        })
    }
}

export const createTask = async (req, res) => {
    try {
        const { responsable, description } = req.body;
        let postedTask = await TaskModel.create({
            responsable,
            description,
           
        }, {
            fields: ['responsable', 'description']
        });
        if (postedTask) {
            return res.status(201).json({
                message: 'Task created successfully',
                data: postedTask
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: `Error: ${error}`
        })
    }
}

export const patchTaskById = async (req, res) => {
    let { id } = req.params;
    let currentTaks = await TaskModel.findOne({
        where: {
            id
        }
    });
    if (currentTaks) {
        try {
            let { responsable, description } = req.body;
            let updatedTask = await currentTaks.update({
                responsable,
                description
            });
            return res.status(201).json({
                data: updatedTask
            });
        } catch (error) {
            return res.status(500).json({
                message: `Error: ${error}`
            });
        }
    } else {
        return res.status(404).json({
            message: `Task not Found`
        })
    }
}

export const deleteTaskById = async (req, res) => {
    let { id } = req.params;
    let currentTaks = await TaskModel.findOne({
        where: {
            id
        }
    })
    if (currentTaks) {
        try {
            let deletedTask = await TaskModel.destroy({
                where: {
                    id
                }
            })
            return res.status(200).json({
                message: 'Task deleted successfully',
                count: deletedTask,
                deleted: id
            });
        } catch (error) {
            return res.status(500).json({
                message: `Error: ${error}`
            });
        }
    } else {
        return res.status(404).json({
            message: `Task not found`
        });
    }
}