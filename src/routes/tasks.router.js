import { Router } from 'express';
import * as taskCtrl from '../controllers/task.controller'

const router = Router()


router.post('/', taskCtrl.createTask)

router.get('/', taskCtrl.findAllTasks)

router.get('/done', taskCtrl.findAllDoneTasks)

router.get('/:id', taskCtrl.findOneTasks)

router.delete('/:id', taskCtrl.deleteTask)

router.put('/:id', taskCtrl.updateTasks)


export default router