const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const session = require('express-session')
//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3001)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layautDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(session({
  secret:'secret',
  resave: true,
  saveUnitialized: true
}))
app.set('view engine', '.hbs')
//routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/products.routes'))
app.use(require('./routes/users.routes'))
app.use(require('./routes/schedule.routes'))
//static files
app.use(express.static(path.join(__dirname + '/src')));
module.exports = app;