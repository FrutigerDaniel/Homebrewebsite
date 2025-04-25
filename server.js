const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/psp', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'psp.html'));
});
app.get('/psv', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'psv.html'));
});
app.get('/wii', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'wii.html'));
});
app.get('/x360', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'x360.html'));
});
app.get('/ps3', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'ps3.html'));
});
app.get('/coming-soon', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'coming-soon.html'));
});

app.listen(PORT, function () {
    console.log('Сервер запущен на порту ' + PORT);
});
