const express = require("express");
const path = require('path');
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const session = require("express-session");
app.use(session({resave: true, saveUninitialized: true, secret: "Nuestro mensaje secreto"}));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieAuthMiddleware = require("./middlewares/auth-cookie-middleware");
app.use(cookieAuthMiddleware);

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const mainRouter = require("./routes/main.js");
app.use("/", mainRouter);

app.use((req, res, next) => {
    res.status(404).render("errors/404");
})

const cors = require("cors");
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.listen(3050, () => {
    console.log('Servidor corriendo en el puerto 3050');
});