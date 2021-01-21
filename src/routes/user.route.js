import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router()

router.get('/users', userController.getUsers)
router.delete('/user/:id', userController.deleteUserById)

export default router;