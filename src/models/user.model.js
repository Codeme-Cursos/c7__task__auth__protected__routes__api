import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const UserModel = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    versionKey: false
})
/* UserModel.hasMany(TaskModel, { foreignKey: 'userid', sourceKey: 'id' });
TaskModel.belongsTo(UserModel, { foreignKey: 'userid', sourceKey: 'id' });
 */
export default UserModel;