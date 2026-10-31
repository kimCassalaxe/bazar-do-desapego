const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const auth = require('../middleware/auth');

router.post('/conversation', auth, chatController.createOrGetConversation);
router.get('/conversations', auth, chatController.getConversations);
router.get('/messages/:conversation_id', auth, chatController.getMessages);
router.post('/message', auth, chatController.sendMessage);

module.exports = router;