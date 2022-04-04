const express = require("express");
const router = express.Router();

const {
	getAllTasks,
	createNewTask,
	changeTaskInfo,
	deleteTask,
} = require("../controllers/task.controller");

router.get("/allTasks", getAllTasks);
router.post("/createTask", createNewTask);
router.get("/updateTask", changeTaskInfo);
router.get("/deleteTask", deleteTask);

// - Чтобы получить доступ к функционалу модуля, нужно его экспортировать
module.exports = router; // - Экспорт объекта напрямую (экспорт контейнера - module.exports.container = router)
