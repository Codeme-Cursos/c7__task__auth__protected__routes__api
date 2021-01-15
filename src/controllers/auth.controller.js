import UserModel from '../models/user.model';

export const login = (req, res) => {
    res.json({
        message: 'login'
    })
}

export const register = (req, res) => {
    res.json({
        message: 'register'
    })
}

export const getUsers = async (req, res) => {
    try {
        let gotUsers = await UserModel.findAll(/* {
            include: {
                model: UserModel,
                as: 'user',
                attributes: ['username', 'email']
            }
        } */);
        res.status(200).json(gotUsers);
    } catch (error) {
        res.status(500).json({
            message: `Error: ${error}`
        });
    }
}