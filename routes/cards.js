const router = require('express').Router();
let Cards = require('../models/cards.model');
let SwipedCards = require('../models/swipedCards.model');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  const { uid } = req.query;

  if (!uid) {
    res.status(400).json({ "error": "missing field" });
    return;
  }

  SwipedCards.find({ "uid" : uid })
    .then(swipedCards => {
      // TODO: update algo
      console.log(swipedCards);
      let filter = { "targetUid": { $nin: [uid] } };
      //if (swipedCards.length === 0) {
      //  filter = [uid];
      //}
      Cards.find(filter)
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

  Cards.deleteOne({ "uid": uid });
  User.findOne({ "uid": uid })
  .then(user => {
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

  const newSwipedCard = new SwipedCards({uid, targetUid, action});

  SwipedCards.exists({ uid: uid, targetUid: targetUid })
  .then(exists => {
    if (exists) {
      console.log(`${uid} already swiped ${targetUid}!`);
    } else {
      newSwipedCard.save()
      .then(() => res.json({ result: 'ok' }))
      .catch(err => res.status(400).json('Error: ' + err));
    }
  })
  .catch(err => {
    res.status(400).json('Error: ' + err);
    console.log(err);
  });
});

module.exports = router;