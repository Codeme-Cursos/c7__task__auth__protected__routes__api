import UserModel from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    let user = await UserModel.findOne({
        where: {
            email
        }
    });
    if (!user) {
        try {
            const salt = await bcrypt.genSalt(8);
            const encryptedPassword = await bcrypt.hash(password, salt);
            const registeredUser = await UserModel.create({
                username,
                email,
                password: encryptedPassword
            }, {
                fields: ['username', 'email', 'password']
            })
            res.status(201).json(registeredUser)
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    } else {
        res.status(500).json({
            message: 'Email ya registrado'
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    let user = await UserModel.findOne({
        where: {
            email
        }
    });
    if (user) {
        try {
            const checkPassword = await bcrypt.compare(password, user.password)
            const token = jwt.sign({ user }, process.env.JWT_SECRET)
            if (checkPassword) {
                res.status(200).json({
                    user: {
                        username: user.username,
                        email: user.email
                    },
                    token
                })
            } else {
                res.status(400).json({
                    message: 'Contraseña incorrecta'
                })
            }
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    } else {
        res.status(404).json({
            message: 'Usuario no existe'
        })
    }
}

export const getUsers = async (req, res) => {
    try {
        let gotUsers = await UserModel.findAll();
        res.status(200).json(gotUsers);
    } catch (error) {
        res.status(500).json({
            message: `Error: ${error}`
        });
    }
}
