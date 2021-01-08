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

  const newSwipedCard = new SwipedCards({uid, targetUid, action});

  SwipedCards.exists({ uid: uid, targetUid: targetUid })
  .then(exists => {
    if (exists) {
      console.log(`${uid} already swiped ${targetUid}!`);
      res.status(400).json({ "error": "swiped user already"});
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