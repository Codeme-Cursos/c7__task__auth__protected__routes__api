import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const TaskModel = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    responsable: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    userId: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
})

export default TaskModel;