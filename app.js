const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

let app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})

// REQUIRE ROUTES
const indexRouter = require('./routes/indexRouter');

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// MIDDLEWARES


// USE ROUTES
app.get('/', indexRouter);