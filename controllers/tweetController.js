const { postTweet, fetchTimeline } = require('../services/tweetService');

const createTweet = async (req, res) => {
  try {
    const tweet = await postTweet(req.user._id, req.body.text);
    res.status(201).send(tweet);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const getTimeline = async (req, res) => {
  try {
    const { userId } = req.params;
    const { cursor, limit } = req.query;
    const tweets = await fetchTimeline(userId, cursor, parseInt(limit, 10));
    res.send(tweets);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = { createTweet, getTimeline };
