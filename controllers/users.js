// const mongoose = require('mongoose');
const User = require('../models/user');

function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('users/index', { 
        users, 
        user: req.user,
        name: req.query.name, 
        sortKey });
    });
  }

//   function addPost(req, res, next) {
//     console.log(req.user);
//     req.user.posts.push(req.body);
//     req.user.save(function(err) {
//       console.log('!!!!', posts);
//       res.redirect('/users');
//     });
//   }


// //add middleware to get delete to work
//   function delPost(req, res, next) {
//     User.findOne({'posts._id': req.params.id}, function(err, user) {
//       user.facts.id(req.params.id).remove();
//       user.save(function(err) {
//         res.redirect('/users');
//       });
//     });
//   }

module.exports = {
    index,

}


