const express = require("express");
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(3050, () => {
    console.log('Servidor corriendo en el puerto 3050');
});

const mainRouter = require("./routes/main-routes.js");
app.use("/", mainRouter);
