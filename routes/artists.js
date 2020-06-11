const router = require('express').Router();
// const router = express.Router();
const artistsCtrl = require('../controllers/artists');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
    //res.redirect('/artists');
}
router.get('/', artistsCtrl.index);
//router.get('/artists', () => {res.send('this is the about page!')})
router.post('/', isLoggedIn, artistsCtrl.addPost);
router.delete('/:id', isLoggedIn, artistsCtrl.delPost);
router.get('/:id/edit', isLoggedIn, artistsCtrl.editPost);
router.put('/:id', artistsCtrl.updatePost)
router.post('/:id/comment', isLoggedIn, artistsCtrl.addComment);

module.exports = router;