const express = require('express');
const taskController = require('../Controllers/taskController');
const router = express.Router();

router.post('/',taskController.createTask);
router.get('/',taskController.getAllTasks);
router.get("/:id",taskController.getTasksById)
router.delete("/:id",taskController.deleteTaskById);
router.put("/:id",taskController.updateTask);
module.exports=router;