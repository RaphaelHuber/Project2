require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
// const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const flash = require('connect-flash');

const User = require('./models/User');

mongoose
  .connect('mongodb://heroku_ktp1fvjh:4436h5uduibgv53c88tjv1v776@ds125871.mlab.com:25871/heroku_ktp1fvjh', { useNewUrlParser: true })
  .then((x) => {
  })
  .catch((err) => {
    console.error('Error connection to Mongo', err);
  });

const app_name = require('./package.json').name;

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.use(session({
  secret: 'pallet-town',
  resave: true,
  saveUninitialized: true
}));

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: 'Incorrect PokéMaster or password' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: 'Incorrect PokéMaster or password' });
    }

    return next(null, user);
  });
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, '/views/partials'));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

const index = require('./routes/index');

app.use('/', index);

module.exports = app;
