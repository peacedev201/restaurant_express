var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main.controller')
var main = new mainController();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var csrf = require('csurf');
var csrfProtection = csrf();

var passport = require('passport')

router.use(csrfProtection)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signin', function(req, res, next) {
  var messages = req.flash('error')
  res.render('auth/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.get('/signup', function(req, res, next) {
  var messages = req.flash('error')
  res.render('auth/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

// router.post('/signup', function(req, res, next){
//   console.log('req.body', req.body)
//   res.redirect('/');
// })

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: 'signin',
  failureRedirect: 'signup',
  failureFlash: true
}))

router.post('/signin', passport.authenticate('local.signin', {
  successRedirect: '/',
  failureRedirect: '/signin',
  failureFlash: true
}))

router.get('/test', main.test);

module.exports = router;
