const Tweet = require('../models/tweet');

const postTweet = async (userId, text) => {
  const tweet = new Tweet({ userId, text });
  await tweet.save();
  return tweet;
};

const fetchTimeline = async (userId, cursor = null, limit = 10) => {
  const query = { userId };
  if (cursor) query._id = { $lt: cursor };
  return Tweet.find(query).sort({ createdAt: -1 }).limit(limit);
};

module.exports = { postTweet, fetchTimeline };
