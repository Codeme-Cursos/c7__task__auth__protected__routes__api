import UserModel from '../models/user.model';

export const getUsers = async (req, res) => {
    try {
        let gotUsers = await UserModel.findAll();
        return res.status(200).json(gotUsers);
    } catch (error) {
        return res.status(500).json({
            message: `Error: ${error}`
        })
    }
}

export const deleteUserById = async (req, res) => {
    let { id } = req.params;
    let currentUser = await UserModel.findOne({
        where: { id }
    })
    if (currentUser) {
        try {
            await UserModel.destroy({
                where: { id }
            })
            return res.status(200).json({
                message: 'User deleted successfully'
            })
        } catch (error) {
            return res.status(500).json({
                message: `Error: ${error}`
            })
        }
    } else {
        return res.status(404).json({
            message: 'User not found'
        })
    }
}