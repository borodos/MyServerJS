const mongoose = require("mongoose"); // - Импорт модуля mongoose

const Schema = mongoose.Schema; // - Создание экземпляра схемы

const taskSchema = new Schema({
	text: String,
	isCheck: Boolean,
});

module.exports = Task = mongoose.model("tasks", taskSchema);
