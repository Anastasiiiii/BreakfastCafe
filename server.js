const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/css/styles.css', (req, res) => {
    res.sendFile(__dirname + '/src/css/styles.css');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});