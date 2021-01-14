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
    userid: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
})

export default TaskModel;