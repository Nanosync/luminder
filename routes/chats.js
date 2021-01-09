const router = require('express').Router();
let Chat = require('../models/chats.model');

router.route('/').get((req, res) => {
  Chat.find()
    .then(chats => res.json(chats))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/getchat/:id").get((req, res) => {
  Chat.findById({_id: req.params.id})
    .then((chat) => res.json(chat))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/update/:id").post((req, res) => {
  Chat.findById({_id: req.params.id})
    .then((chat) => {
      chat.recipients = req.body.recipients;
      chat.messages = req.body.messages;

      chat
        .save()
        .then(() => res.json({ "result": "Chat updated!" }))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
  const recipients = req.body.recipients;
  const messages = req.body.messages;

  const newChat = new Chat({recipients, messages});

  newChat.save()
    .then(() => res.json('Chat added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;