const express = require('express');
const router = express.Router();
const resourceLinksCtrl = require('../controllers/resourceLinks');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

router.get('/', resourceLinksCtrl.index);
router.post('/', isLoggedIn, resourceLinksCtrl.addPost);
router.post('/:id/comment', isLoggedIn, resourceLinksCtrl.addComment);
router.delete('/:id', isLoggedIn, resourceLinksCtrl.delPost);
router.get('/:id/edit', isLoggedIn, resourceLinksCtrl.editPost);
router.put('/:id', resourceLinksCtrl.updatePost)

module.exports = router;