const router = require('express').Router();
let Cards = require('../models/cards.model');
let SwipedCard = require('../models/swipedCards.model');
let User = require('../models/user.model');
let Chat = require('../models/chats.model');

router.route('/').get((req, res) => {
  const { uid } = req.query;

  if (!uid) {
    res.status(400).json({ "error": "missing field" });
    return;
  }

  SwipedCard.find({ "uid" : uid })
    .then(swipedCards => {
      if (!swipedCards) {
        res.status(400).json('error');
        return;
      }

      let ids = [uid];
      swipedCards.forEach(card => ids.push(card.targetUid));
      console.log(ids);

      Cards.find({ "uid": { $nin: ids } })
      .then(cards => res.json(cards))
      .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/advertise').post((req, res) => {
  const { uid } = req.body;

  if (!uid) {
    res.status(400).json({ "error": "missing field" });
    return;
  }

  Cards.deleteOne({ "uid": uid }).catch(err => console.log(`No cards with uid ${uid}`));
  User.findOne({ "uid": uid })
  .then(user => {
    if (!user) {
      return;
    }

    console.log("Creating new advertisement");

    const { name, photos, gender, age, modules, bio } = user;
    const newCard = new Cards({uid,
      name,
      photos,
      gender,
      age,
      modules,
      bio});
      newCard.save()
      .then(() => res.json({ "result": 'ok'}))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/swipe').post((req, res) => {
  const { uid, targetUid, action } = req.body;
  
  if (!uid || !targetUid || !action) {
    res.status(400).json({ "error": "missing field" });
    return;
  }

  if (uid === targetUid) {
    res.status(400).json({ "error": "cannot swipe self" });
    return;
  }

  SwipedCard.exists({ uid: uid, targetUid: targetUid })
  .then(exists => {
    if (exists) {
      console.log(`${uid} already swiped ${targetUid}!`);
      res.status(400).json({ "error": "swiped user already"});
    } else {
      const newSwipedCard = new SwipedCard({uid, targetUid, action});
      newSwipedCard.save()
      //.then(() => res.json({ result: 'ok' }))
      .catch(err => res.status(400).json('Error: ' + err));
    }
  })
  .catch(err => {
    res.status(400).json('Error: ' + err);
    console.log(err);
    return;
  });

  SwipedCard.exists({ uid: targetUid, targetUid: uid, action: "like" })
  .then(exists => {
    if (exists) {
      console.log(`matched ${uid} with ${targetUid}`)
      // its a match
      const recipients = [uid, targetUid];

      const newChat = new Chat({recipients});
      newChat.save()
        //.then(() => res.json({result: "matched"}))
        .catch(err => res.status(400).json('Error: ' + err));

      User.findOne({ "uid": uid })
      .then(user => {
        if (!user) {
          return;
        }
        
        user.chats = [...user.chats, newChat.id];
        user.save();
      });

      User.findOne({ "uid": targetUid })
      .then(user => {
        if (!user) {
          return;
        }
        
        user.chats = [...user.chats, newChat.id];
        user.save();
      });

      res.json({result: "matched"});
    } else {
      res.json({result: "ok"});
    }
  });
});

module.exports = router;