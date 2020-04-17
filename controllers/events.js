const Post = require('../models/post');

// const index = (req, res) => {
//   res.render('events/index')
// }

function index(req, res, next) {
  Post.find({
    category: 'events'
  }).exec(function(err, posts) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('events/index', { 
      posts, 
      user: req.user
       });
  });
}



function addPost(req, res, next) {
  req.body.category = 'events';
  //console.log('req.body', req.body);
  const post = new Post(req.body)
  post.save(function (err, posts) {
    console.log('last added', posts);
    res.redirect('/events');
  });
}



function delPost(req, res, next) {
  Post.deleteOne({_id:req.params.id})
  .then((err) => {
         res.redirect('/events');
  })
}

function editPost(req, res) {
  Post.findById({_id:req.params.id}, (err, posts) => {
    res.render('./events/edit.ejs', {
      posts,
      user: req.user
    })
  })
}

function updatePost(req, res) {
Post.findByIdAndUpdate(req.params.id, req.body, (err, posts) => {
  res.redirect('/events');
}
);
}
module.exports = {
    index,
    addPost,
    delPost,
    editPost,
    updatePost
};