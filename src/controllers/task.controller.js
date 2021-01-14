import TaskModel from '../models/task.model';
import UserModel from '../models/user.model';

export const getTasks = async (req, res) => {
    try {
        let gotTasks = await TaskModel.findAll({
            include: {
                model: UserModel,
                as: 'user',
                attributes: ['username', 'email']
            }
        });
        res.status(200).json({
            data: gotTasks
        });
    } catch (error) {
        res.status(500).json({
            message: `Error: ${error}`
        });
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
                },
                include: {
                    model: UserModel,
                    as: 'user',
                    attributes: ['username', 'email']
                }
            });
            res.status(200).json({
                data: gotTask
            });
        } catch (error) {
            res.status(500).json({
                message: `Error: ${error}`
            });
        }
    } else {
        res.status(404).json({
            message: `Tarea no existe`
        });
    }
}

export const createTask = async (req, res) => {
    try {
        const { responsable, description, userid } = req.body;
        let postedTask = await TaskModel.create({
            responsable,
            description,
            userid
        }, {
            fields: ['responsable', 'description', 'userid']
        });
        if (postedTask) {
            return res.status(201).json({
                message: "Tarea creada con éxito",
                data: postedTask
            });
        }
    } catch (error) {
        res.status(500).json({
            message: `Error: ${error}`
        });
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
            res.status(201).json({
                data: updatedTask
            });
        } catch (error) {
            res.status(500).json({
                message: `Error: ${error}`
            });
        }
    } else {
        res.status(404).json({
            message: `Tarea no existe`
        });
    }
}

export const deleteTaskById = async (req, res) => {
    let { id } = req.params;
    let currentTaks = await TaskModel.findOne({
        where: {
            id
        }
    });
    if (currentTaks) {
        try {
            let deletedTask = await TaskModel.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: "Tarea eliminada con éxito",
                count: deletedTask,
                deleted: id
            });
        } catch (error) {
            res.status(500).json({
                message: `Error: ${error}`
            });
        }
    } else {
        res.status(404).json({
            message: `Tarea no existe`
        });
    }
}