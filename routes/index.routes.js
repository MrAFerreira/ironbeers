const router = require('express').Router();
const Request = require('../models/Request.model');
const isLoggedIn = require('../middleware/isLoggedIn');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('karaoke-form');
});

router.post('/request', (req, res, next) => {
  const { singers, song } = req.body;

  if (!singers || !song) {
    res.render('karaoke-form', { errorMessage: 'Please fill both fields' });
    return;
  }

  Request.create({ singers, song }).then((request) => res.render('submitted', request));
});

router.get('/list', isLoggedIn, (req, res, next) => {
  Request.find()
    .then((requests) => res.render('list', { requests }))
    .catch((err) => next(err));
});
router.get('/secret-list', isLoggedIn, (req, res, next) => {
  Request.find()
    .then((requests) => res.render('secret-list', { requests }))
    .catch((err) => next(err));
});

router.get('/delete/:id', (req, res, next) => {
  const { id } = req.params;

  Request.findByIdAndRemove(id)
    .then(() => res.redirect('/list'))
    .catch((err) => next(err));
});

module.exports = router;
