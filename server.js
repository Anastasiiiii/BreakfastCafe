const express = require('express');
const mysql = require('mysql2');
const app = express();
//const script = require('./public/script');
//const pageRouter = require('./pageRouter');


//app.use('/', script);
const port = 3000;

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

//app.use('/script.js', express.static(__dirname + '/public/script.js'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contactus.html');
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/adminPage.html');
});


app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
      if (path.endsWith('.js')) {
        res.set('Content-Type', 'javascript');
      }
    }
  }));
app.get('/modal-styles.css', (req, res) => {
    res.sendFile(__dirname + '/modal-styles.css');
});

app.get('/node_modules/bootstrap/dist/css/bootstrap.min.css', (req, res) => {
    res.sendFile(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css');
});

app.get('/node_modules/bootstrap/dist/css/bootstrap.min.css.map', (req, res) => {
    res.sendFile(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css.map');
});
 
app.get('/home/get/all', (request, response) => {
    const sql = 'SELECT * FROM loginInfo';

    dbConnection.query(sql, (err, result, fields) => {

        if (err) {
            console.error('Error executing query:', err);
            response.sendStatus(500);
            return;
        }
        response.send(result);
    });
});

/*app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});*/