const Post = require('../models/post');

// const index = (req, res) => {
//   res.render('techniques/index')
// }
function index(req, res, next) {
  Post.find({
    category: 'techniques'
  })
  .exec(function (err, posts) {
    if (err) return next(err);
    res.render('techniques/index', {
      posts,
      user: req.user
    });
  });
}

function addPost(req, res, next) {
req.body.category = 'techniques';
const post = new Post(req.body)
post.save(function (err, posts) {
  res.redirect('/techniques')
})
}

function delPost(req, res, next) {
  Post.deleteOne({_id:req.params.id})
  .then((err) => {
         res.redirect('/techniques');
  })
}

function editPost(req, res) {
  Post.findById({_id:req.params.id}, (err, posts) => {
    res.render('./techniques/edit.ejs', {
      posts,
      user: req.user
    })
  })
}

function updatePost(req, res) {
Post.findByIdAndUpdate(req.params.id, req.body, (err, posts) => {
  res.redirect('/techniques');
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