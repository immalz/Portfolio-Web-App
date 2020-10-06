const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// Initializations
const app = express();
require('./config/database');

//routes
app.use(require('./routes/home'));
app.use(require('./routes/portfolio'));
app.use(require('./routes/service'));
app.use(require('./routes/contact'));


// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// Middlewares
app.use(express.json());


// Static Files 
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;