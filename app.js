let express = require("express")
let path = require('path')

let app = express()
let publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3050, () => {
    console.log('Servidor corriendo en el puerto 3050');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/indexSA.html'));
});
app.get('/views/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
app.get('/views/productCart.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});