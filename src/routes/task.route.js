import { Router } from 'express';
import * as taskController from '../controllers/task.controller';
import verifyToken from '../middlewares/verifyToken';
const router = Router();

router.get('/tasks', taskController.getTasks)
router.get('/task/:id', taskController.getTaskById)
router.post('/tasks', verifyToken, taskController.createTask)
router.patch('/task/:id', verifyToken, taskController.patchTaskById)
router.delete('/task/:id', verifyToken, taskController.deleteTaskById)

export default router;