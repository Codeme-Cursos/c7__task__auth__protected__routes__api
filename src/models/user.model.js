import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const UserModel = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    username: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
})

export default UserModel;