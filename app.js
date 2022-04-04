const express = require("express"); // - Импорт фреймворка Express
const bodyParser = require("body-parser");
const cors = require("cors"); // - Импорт корсов
/** CORS
 * Cross-Origin Resource Sharing (CORS) — механизм, использующий дополнительные HTTP-заголовки, чтобы дать возможность агенту пользователя
 * получать разрешения на доступ к выбранным ресурсам с сервера на источнике (домене), отличном от того, что сайт использует в данный момент.
 */
const mongoose = require("mongoose"); // - Импорт модуля mongoose
const app = express(); // - Инициализация Express

/**
 * require используют для загрузки модуля, обычно присваивая результат его работы какой-то переменной
 * Конечно же, до тех пор, пока наш модуль ничего не отдаёт, все приведённые примеры бесполезны. А чтобы наш модуль что-нибудь отдал, мы будем использовать module.exports
 */

const PORT = process.env.PORT ?? 8000;
const apiRouters = require("./src/modules/routes/routes.js");

app.use(cors());

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
