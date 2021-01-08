const router = require('express').Router();
let Chat = require('../models/chats.model');

router.route('/').get((req, res) => {
  Chat.find()
    .then(chats => res.json(chats))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const chatId = req.body.chatId;
  const recipients = req.body.recipients;
  const messages = req.body.messages;

  const newChat = new Chat({chatId, recipients, messages});

  newChat.save()
    .then(() => res.json('Chat added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;