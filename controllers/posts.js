const Post = require('../models/post');

function index(req, res, next) {
  Post.find({
    category:'posts'
  })
  .populate('user')
    .exec(function (err, posts) {
      //console.log('!!!!! all posts', posts);
      if (err) return next(err);
      res.render('posts/index', {
        posts,
        name: req.query.name,
        user: req.user
      });
    });
}

function addPost(req, res, next) {
  req.body.category = 'posts';
  //console.log('req.body', req.body);
  const post = new Post(req.body)
  post.save(function (err, posts) {
    //console.log('!!!! last added post', posts);
    res.redirect('/posts');
  });
}


function delPost(req, res, next) {
  Post.deleteOne({_id:req.params.id})
  .then((err) => {
         res.redirect('/posts');
  })
}

function editPost(req, res) {
  Post.findById({_id:req.params.id}, (err, posts) => {
    res.render('./posts/edit.ejs', {
      posts,
      user: req.user
    })
  })
}

function updatePost(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, (err, posts) => {
    res.redirect('/posts');
  }
);
}

function addComment(req, res) {
  console.log(req);
  const comment = req.body
  Post.findById({_id:req.params.id}, (err, post) => {
    // console.log('11111', req.params.id);
    post.comments.push(comment)
    post.save(function (err, comments) {
      // console.log('!!!! last added comment', comments);
      res.redirect('/posts');
    });
  })
}

module.exports = {
  index,
  addPost,
  delPost,
  editPost,
  updatePost,
  addComment
}