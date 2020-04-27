var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main.controller')
var main = new mainController();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signin', function(req, res, next) {
  res.render('auth/signin', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('auth/signup', { title: 'Express' });
});

router.get('/test', main.test);

module.exports = router;
