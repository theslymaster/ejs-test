const express = require('express');
const app = express();
const ejs = require('ejs');
const flag = require('./flag.json');

app.set('view engine', 'ejs');
app.use((req, res, next) => {
    res.locals = {
        ejs
    };

    next();
});

app.get('/', (req, res) => {
    res.render('index', {flag: flag, names:[]});
});

app.listen(3000);