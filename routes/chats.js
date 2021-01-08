const router = require('express').Router();
let Chat = require('../models/chats.model');

router.route('/').get((req, res) => {
  Chat.find()
    .then(chats => res.json(chats))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const chatId = req.body.chatId;
  const from = req.body.from;
  const to = req.body.to;
  const messages = req.body.messages;

  const newChat = new Chat({chatId, from, to, messages});

  newChat.save()
    .then(() => res.json('Chat added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;