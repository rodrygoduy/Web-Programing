const express = require('express');
const TaskController = require('../controllers/taskController');
const router = express.Router();

router.get('/task',TaskController.getAllTask);
router.post('/task', TaskController.createTask);
router.put('/task/:id', TaskController.updateTask);
router.delete('/task/:id', TaskController.deleteTask);
router.put('/task/HoanThanhTask/:id', TaskController.HoanThanhTask); 

module.exports = router;