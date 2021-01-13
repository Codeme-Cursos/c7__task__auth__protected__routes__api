import { Router } from 'express';
import * as taskController from '../controllers/task.controller';
const router = Router();

router.get('/tasks', taskController.getProducts)
router.get('/task/:id', taskController.getProductById)
router.post('/tasks', taskController.createProductById)
router.patch('/task/:id', taskController.updateProductById)
router.delete('/task/:id', taskController.deleteProductById)

export default router;