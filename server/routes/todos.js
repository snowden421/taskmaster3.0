const router = require('express').Router();
const { createTodos, readTodos } = require('../controller/todos.js');

router.get('/', readTodos);
router.post('/', createTodos);

module.exports = router;