const express = require('express');
const { createTweet, getTimeline } = require('../controllers/tweetController');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createTweet);
router.get('/:userId/timeline', authMiddleware, getTimeline);

module.exports = router;
