const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const uid = req.body.uid;
  const gender = req.body.gender;
  const bio = req.body.bio;
  const photos = req.body.photos;
  const modules = req.body.modules;
  const chats = req.body.chats;
  const matches = req.body.matches;
  const likes = req.body.likes;
  const dislikes = req.body.dislikes;
  const profilePhoto = req.body.profilePhoto;

  const newUser = new User({name, uid, gender, bio, photos, modules, chats, matches, likes, dislikes, profilePhoto});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.name = req.body.name;
      user.uid = req.body.uid;
      user.gender = req.body.gender;
      user.bio = req.body.bio;
      user.photos = req.body.photos;
      user.modules = req.body.modules;
      user.chats = req.body.chats;
      user.matches = req.body.matches;
      user.likes = req.body.likes;
      user.dislikes = req.body.dislikes;
      user.profilePhoto = req.body.profilePhoto;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;