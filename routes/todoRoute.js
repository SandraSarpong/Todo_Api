const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.post('/', todoController.addTodo);
router.put('/:id', todoController.updateTodoById); 
router.delete('/:id', todoController.deleteTodoById);
router.get('/', todoController.getAllTodos);

module.exports = router;