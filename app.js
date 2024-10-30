// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username', // Replace with your MySQL username
    password: 'your_password', // Replace with your MySQL password
    database: 'your_database_name' // Replace with your database name
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Render index.ejs
});

app.get('/about', (req, res) => {
    res.render('about'); // Render about.ejs
});

app.get('/courses', (req, res) => {
    res.render('courses'); // Render courses.ejs
});

app.get('/price', (req, res) => {
    res.render('price'); // Render price.ejs
});

app.get('/videos', (req, res) => {
    res.render('videos'); // Render videos.ejs
});

app.get('/sericulture', (req, res) => {
    res.render('sericulture'); // Render sericulture.ejs
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Render contact.ejs
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});