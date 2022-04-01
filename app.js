const express = require("express"); // - Импорт фреймворка Express
const mongoose = require("mongoose"); // - Импорт модуля mongoose
const app = express(); // - Инициализация Express
const Schema = mongoose.Schema; // - Создание экземпляра схемы

// - Конструктор Shema. Создание схемы
const taskSchema = new Schema({
	text: String, // - Поле схемы
	isCheck: Boolean, // - Поле схемы
	// Каждое поле будет полем документа, хранимого в БД MongoDB
});

const uri =
	"mongodb+srv://ginoss:4140022admin@cluster0.zxzka.mongodb.net/MyDataBase?retryWrites=true&w=majority";

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}); // - Подключение к MongoDB

// - Модели создаются из схем методом mongoose.model().
// - Компилируем модель из схемы
const Task = mongoose.model("tasks", taskSchema);
/**
 * Первый аргумент - уникальное имя создаваемой для модели коллекции(Mongoose создаст коллекцию для модели Task),
 * второй аргумент - схема, которая используется для создания модели.
 */

// Создание роута, который по / выдаст сообщение
// В приложении app анализируем запрос (get,patch,delete и т. д.). В данном случае анализируем запрос get.
// Через приложение Postman отправляем запрос на get (получение данных). Если данные получили, записываем их в БД
app.get("/", (req, res) => {
	const task = new Task({
		text: "First task",
		isCheck: false,
	});

	task
		.save() // - Сохранить новый экземпляр коллекции - .save(). Далее применяем метод .then, чтобы узнать результат сохранения
		.then((value) => {
			res.send(value); // - Возвращает параметры в БД (и отправляет обратно в Postman по API запросу)
		})
		.catch((err) => console.log(err));
});

app.get("/paramRequest", (req, res) => {
	Task.find().then((result) => {
		res.send({ data: result });
	});
});

/**
 * app.listen(port, function);
 * port - порт, который прослушивается
 */
app.listen(8000, () => {
	console.log("Listening port 8000");
});
