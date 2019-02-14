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
const Pokemon = require('../models/Pokemon');
const Team = require('../models/Team');

const bcryptSalt = 10;

router.get('/', (req, res, next) => {
  res.redirect('/login');
});

router.get('/login', (req, res, next) => {
  res.render('login', { message: req.flash('error'), layout: false });
});

router.get('/signup', (req, res, next) => {
  res.render('signup', { layout: false });
});

router.post('/signup', (req, res, next) => {
  const { username, password, email } = req.body;

  if (username === '' || password === '' || email === '') {
    res.render('signup', { message: 'Please fill in all fields', layout: false });
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.render('signup', { message: 'This PokéMaster is already registered', layout: false  });
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
          res.render('signup', { message: 'Registration ran away!', layout: false  });
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
  Team.find({ trainer: req.user.username })
    .populate('pokemon')
    .then((allTeams) => {
      res.render('teams', { allTeams });
    });
});

router.get('/pokeList', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Pokemon.find({ trainer: req.user.username })
    .then((allPokemon) => {
      res.render('pokeList', { allPokemon });
    });
});


router.post('/login', passport.authenticate('local', {
  successRedirect: '/teams',
  failureRedirect: '/login',
  failureFlash: true,
  passReqToCallback: true
}));

router.get('/createPokemon', ensureLogin.ensureLoggedIn(), (req, res) => {
  Species.find({})
    .then((allSpecies) => {
      res.render('createPokemon', { allSpecies });
    });
});

router.get('/editPokemon/:id', ensureLogin.ensureLoggedIn(), (req, res) => {
  Pokemon.findOne({ _id: req.params.id })
    .then((edited) => {
      console.log(edited);
      res.render('editPokemon', { edited });
    });
});

router.get('/loadOneSpecies/:id', (req, res) => {
  Species.find({ name: req.params.id })
    .then((selected) => {
      res.send(selected);
    });
});

router.get('/loadNature/:id', (req, res) => {
  Nature.findOne({ name: req.params.id })
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

router.get('/teamDetail', (req, res, next) => {
  res.render('teamDetail');
});

router.post('/createPokemon', (req, res) => {
  const trainer = req.user.username;
  const item = req.body.createItem;
  const nature = req.body.createNature;
  const ability = req.body.createAbility;
  const moves = [req.body.createMove1, req.body.createMove2, req.body.createMove3, req.body.createMove4];
  const IV1 = req.body.createIV1;
  const IV2 = req.body.createIV2;
  const IV3 = req.body.createIV3;
  const IV4 = req.body.createIV4;
  const IV5 = req.body.createIV5;
  const IV6 = req.body.createIV6;
  const EV1 = req.body.createEV1;
  const EV2 = req.body.createEV2;
  const EV3 = req.body.createEV3;
  const EV4 = req.body.createEV4;
  const EV5 = req.body.createEV5;
  const EV6 = req.body.createEV6;

  Species.findOne({ name: req.body.speciesName })
    .then((species) => {
      const { dex, name, funFacts, frontSprite, backSprite, type1, type2, baseStats } = species;

      const newPoke = new Pokemon({
        dex,
        name,
        funFacts,
        frontSprite,
        backSprite,
        type1,
        type2,
        baseStats,
        trainer,
        moves,
        ability,
        item,
        nature,
        ivs: {
          HP: IV1,
          Atk: IV2,
          Def: IV3,
          SpAtk: IV4,
          SpDef: IV5,
          Spe: IV6
        },
        evs: {
          HP: EV1,
          Atk: EV2,
          Def: EV3,
          SpAtk: EV4,
          SpDef: EV5,
          Spe: EV6
        }
      });

      newPoke.save((err) => {
        if (err) {
          res.render('createPokemon', { message: 'Error' });
        } else {
          res.redirect('/createPokemon');
        }
      });
    });
});

router.get('/damageAnalysis', (req, res, next) => {
  res.render('damageAnalysis');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
