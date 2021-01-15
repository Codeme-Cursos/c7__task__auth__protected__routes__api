import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import TaskModel from './task.model';

const UserModel = sequelize.define('users', {
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

/* UserModel.hasMany(TaskModel, { foreignKey: 'userid', sourceKey: 'id' });
TaskModel.belongsTo(UserModel, { foreignKey: 'userid', sourceKey: 'id' });
 */
export default UserModel;