const express = require('express');
const path = require('path');

let app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})

// REQUIRE ROUTES
const indexRouter = require('./routes/index');

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES


// USE ROUTES
app.get('/', indexRouter);