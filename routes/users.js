// var express = require('express');
// var router = express.Router();
const router = require('express').Router();
const usersCtrl = require('../controllers/users');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
/* GET users listing. */
router.get('/', usersCtrl.index);
//i dont have any show or new pages for users or the other pages so i dont nned any other userCtrl routes?

// router.post('/', isLoggedIn, usersCtrl.);

module.exports = router;
