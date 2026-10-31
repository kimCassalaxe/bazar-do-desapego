const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');
const auth = require('../middleware/auth');

router.post('/like', auth, socialController.toggleLike);
router.post('/follow', auth, socialController.toggleFollow);
router.post('/comment', auth, socialController.addComment);
router.get('/comments/:product_id', socialController.getComments);
router.get('/notifications', auth, socialController.getNotifications);

module.exports = router;