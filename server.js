const express = require('express');
const mysql = require('mysql2');
const app = express();

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "fna26092002",
    database: "Guests"
};

const dbConnection = mysql.createConnection(connectionOptions);

dbConnection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
    app.listen(port, () => {
        console.log('Server started');
    });
});

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contactus.html');
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

app.get('/home/get/all', (request, response) => {
    const sql = 'SELECT * FROM registration';

    dbConnection.query(sql, (err, result, fields) => {

        if (err) {
            console.error('Error executing query:', err);
            response.sendStatus(500);
            return;
        }
        response.send(result);
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});