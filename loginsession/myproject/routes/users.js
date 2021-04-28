var express = require('express');
var router = express.Router();
var user_controller=require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',user_controller.fetchloginform);//this will fetch login form
router.post('/login',user_controller.loginchk);//when username and pass is submitted for authentication

router.get('/logout',user_controller.logout);//here this route will destroy all sessions.
router.get('/dashboard',user_controller.redirectLogin,user_controller.dashboard)

module.exports = router;