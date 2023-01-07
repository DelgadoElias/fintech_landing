/**
 * Module dependencies
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {v4: uuidv4} = require('uuid');
const session = require('express-session');
const Layout = require('express-ejs-layouts');

// Route dependencies
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const getStartedRouter = require('./routes/get-started');

/**
 * Mount server
 */
const app = express();

/**
 * view engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Middlewares
 */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(Layout);
app.use(session({
  secret: uuidv4(),
  resave: true,
  saveUninitialized: true,
}));

/**
 * Mount routes
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/get-started', getStartedRouter);


/**
 * Error creator
 * TODO: Review
 */
app.use(function(req, res, next) {
  next(createError(404));
});

/**
 * Error handler
 */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
