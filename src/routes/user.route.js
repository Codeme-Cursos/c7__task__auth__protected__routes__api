import { Router } from 'express';
import * as userController from '../controllers/user.controller';
const router = Router();

router.get('/users', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.post('/users', userController.createUserById)
router.patch('/user/:id', userController.updateUserById)
router.delete('/user/:id', userController.deleteUserById)

export default router;