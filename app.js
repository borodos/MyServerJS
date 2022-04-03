const express = require("express"); // - Импорт фреймворка Express
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose"); // - Импорт модуля mongoose
const app = express(); // - Инициализация Express

const PORT = process.env.PORT ?? 8000;
const apiRouters = require("./src/modules/routes/routes.js");

app.use(cors);

const uri =
	"mongodb+srv://ginoss:4140022admin@cluster0.zxzka.mongodb.net/MyDataBase?retryWrites=true&w=majority";

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use("/", apiRouters);

app.listen(PORT, () => {
	console.log(`Listening port ${PORT}`);
});
