let express = require("express")
let path = require('path')

let app = express()
let publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3050, () => {
    console.log('Servidor corriendo en el puerto 3050');
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'));
});