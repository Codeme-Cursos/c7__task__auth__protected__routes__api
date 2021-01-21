import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import verifyToken from '../middlewares/verifyToken';

const router = Router()

router.get('/users', userController.getUsers)
router.delete('/user/:id', verifyToken, userController.deleteUserById)

export default router;