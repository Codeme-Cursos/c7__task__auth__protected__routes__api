import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const TaskModel = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    responsable: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    timestamps: false
})

export default TaskModel;