const Post = require('../models/post');

function index(req, res, next) {
  Post.find({
    category: 'resourceLinks'
  })
    .exec(function (err, posts) {
      //console.log('all!!!!!!', posts);
      if (err) return next(err);
      res.render('resourceLinks/index', {
        posts,
        user: req.user
      });
    });
}

function addPost(req, res, next) {
  req.body.category = 'resourceLinks';
  const post = new Post(req.body)
  post.save(function (err, posts) {
    console.log('!!!! last added post', posts);
    res.redirect('/resourceLinks');
  });
}


function delPost(req, res, next) {
  Post.deleteOne({_id:req.params.id})
  .then((err) => {
         res.redirect('/resourceLinks');
  })
}

  function editPost(req, res) {
    Post.findById({_id:req.params.id}, (err, posts) => {
      res.render('./resourceLinks/edit.ejs', {
        posts,
        user: req.user
      })
    })
  }
 
function updatePost(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, (err, posts) => {
    res.redirect('/resourceLinks');
  }
);
}


function addComment(req, res) {
  console.log(req);
  const comment = req.body
  Post.findById({_id:req.params.id}, (err, post) => {
    console.log('11111', req.params.id);
    post.comments.push(comment)
    post.save(function (err, comments) {
      console.log('!!!! last added comment', comments);
      res.redirect('/resourceLinks');
    });
  })
}

function delComment () {

};

  module.exports = {
    index,
    addPost,
    delPost,
    editPost,
    updatePost,
    addComment,
    delComment
  };