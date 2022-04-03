const express = require("express"); // - Импорт фреймворка Express
const mongoose = require("mongoose"); // - Импорт модуля mongoose
const app = express(); // - Инициализация Express

const PORT = process.env.PORT ?? 8000;
const apiRouters = require(".src/modules/routes/routes");

const uri =
	"mongodb+srv://ginoss:4140022admin@cluster0.zxzka.mongodb.net/MyDataBase?retryWrites=true&w=majority";

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`Listening port ${PORT}`);
});
