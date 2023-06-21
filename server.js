const express = require('express');
const mime = require('mime');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectionOptions = {
  host: 'localhost',
  user: 'root',
  password: 'fna26092002',
  database: 'Guests'
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

const setCustomMimeTypes = (req, res, next) => {
    const mimeType = mime.getType(req.path);
    if (mimeType) {
      res.set('Content-Type', mimeType);
    }
    next();
  };

app.use(express.static(path.join(__dirname, 'public'), { setHeaders: setCustomMimeTypes }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contactus.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'adminPage.html'));
});

app.get('/logedPage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'logedPage.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'css', 'style.css'));
});

app.use(express.static(path.join(__dirname, 'public', 'js')));

app.get('/modal-styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'css', 'modal-styles.css'));
});

app.get('/node_modules/bootstrap/dist/css/bootstrap.min.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'));
});

app.get('/node_modules/bootstrap/dist/css/bootstrap.min.css.map', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css.map'));
});

app.get('/home/get/all', (req, res) => {
  const sql = 'SELECT * FROM SignInfo';

  dbConnection.query(sql, (err, result, fields) => {
    if (err) {
      console.error('Error executing query:', err);
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
});

app.post('/registration', (req, res) => {
  const { name, email, password } = req.body;

  const query = `INSERT INTO SignInfo (name, email, password) VALUES ('${name}', '${email}', '${password}')`;

  dbConnection.query(query, (err, result) => {
    if (err) {
      console.error('Sign in error: ' + err.stack);
      res.json({ success: false });
    } else {
      console.log('Sign in is ready: ' + result.insertId);
      res.json({ success: true });
    }
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM SignInfo WHERE email = ? AND password = ?';

  dbConnection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error('Request error:', error);
      res.sendStatus(500);
    } else {
      const success = results.length > 0;
      res.json({ success });
    }
  });
});


