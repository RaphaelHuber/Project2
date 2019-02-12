const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');
const flash = require('connect-flash');
const ensureLogin = require('connect-ensure-login');

const User = require('../models/User');
const Species = require('../models/Species');
const Item = require('../models/Item');
const Nature = require('../models/Nature');

const bcryptSalt = 10;

router.get('/', (req, res, next) => {
  res.redirect('/login');
});

router.get('/login', (req, res, next) => {
  res.render('login', { message: req.flash('error') });
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', (req, res, next) => {
  const { username, password, email } = req.body;

  if (username === '' || password === '' || email === '') {
    res.render('signup', { message: 'Please fill in all fields' });
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.render('signup', { message: 'This PokéMaster is already registered' });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashedPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        password: hashedPass,
        email
      });

      newUser.save((err) => {
        if (err) {
          res.render('signup', { message: 'Registration ran away!' });
        } else {
          res.redirect('/teams');
        }
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/teams', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  res.render('teams', { user: req.user });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/teams',
  failureRedirect: '/login',
  failureFlash: true,
  passReqToCallback: true
}));

router.get('/createPokemon', (req, res) => {
  Species.find({})
    .then((allSpecies) => {
      res.render('createPokemon', { allSpecies });
    });
});

router.get('/loadOneSpecies/:id', (req, res) => {
  Species.find({ name: req.params.id })
    .then((selected) => {
      res.send(selected);
    });
});

router.get('/loadAllItems', (req, res) => {
  Item.find({})
    .then((selected) => {
      res.send(selected);
    });
});

router.get('/loadAllNatures', (req, res) => {
  Nature.find({})
    .then((selected) => {
      res.send(selected);
    });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
