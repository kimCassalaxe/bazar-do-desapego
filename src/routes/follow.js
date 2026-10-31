const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllFollow, deleteFollowr, createFollowr, getFollowByFollowee } = require('../controllers/followController');

router.get('/all', getAllFollow);
router.get(`/allbyfollowee/:id`, getFollowByFollowee);
router.post('/', auth, createFollowr);
router.delete('/:id', auth,deleteFollowr);

module.exports = router;