const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
    //res.redirect('/posts');
}
/* GET users listing. */
router.get('/', postsCtrl.index);
router.delete('/:id', isLoggedIn, postsCtrl.delPost);
router.post('/', isLoggedIn, postsCtrl.addPost);
router.get('/:id/edit', isLoggedIn, postsCtrl.editPost);
router.put('/:id', postsCtrl.updatePost)
module.exports = router;
