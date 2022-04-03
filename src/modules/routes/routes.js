const express = require("express");
const router = express.Router();

const {
	getAllTasks,
	createNewTask,
	changeTaskInfo,
	deleteTask,
} = require("../controllers/tasl.controller");

router.get("/allTasks", getAllTasks);
router.post("/createTask", createNewTask);
router.get("/updateTask", changeTaskInfo);
router.get("/deleteTask", deleteTask);

module.exports = router;
