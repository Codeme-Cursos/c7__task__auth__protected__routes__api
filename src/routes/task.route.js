import { Router } from 'express';
import * as taskController from '../controllers/task.controller';
const router = Router();

router.get('/tasks', taskController.getTasks)
router.get('/task/:id', taskController.getTaskById)
router.post('/tasks', taskController.createTask)
router.patch('/task/:id', taskController.patchTaskById)
router.delete('/task/:id', taskController.deleteTaskById)

export default router;