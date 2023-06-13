const express = require('express');
const app = express();

app.use(express.static(__dirname + '/node_modules'));


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.get('/modal-styles.css', (req, res) => {
    res.sendFile(__dirname + '/modal-styles.css');
});

app.get('/node_modules/bootstrap/dist/css/bootstrap.min.css', (req, res) => {
    res.sendFile(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css');
});

app.get('/node_modules/bootstrap-social/bootstrap-social.css', (req, res) => {
    res.sendFile(__dirname + '/node_modules/bootstrap-social/bootstrap-social.css');
});

app.get('/node_modules/bootstrap/dist/css/bootstrap.min.css.map', (req, res) => {
    res.sendFile(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css.map');
});


app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});