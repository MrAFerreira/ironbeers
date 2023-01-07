const router = require('express').Router();
const Request = require('../models/Request.model');
const isLoggedIn = require('../middleware/isLoggedIn');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('beer-form');
});

router.post('/request', (req, res, next) => {
  const { name, type, course } = req.body;

  if (!name || !type || !course) {
    res.render('beer-form', { errorMessage: 'Please fill all fields' });
    return;
  }

  Request.create({ name, type, course }).then(request =>
    res.render('submitted', request)
  );
});

router.get('/list', isLoggedIn, (req, res, next) => {
  Request.find()
    .then(requests => res.render('list', { requests }))
    .catch(err => next(err));
});

router.get('/delete/:id', (req, res, next) => {
  const { id } = req.params;

  Request.findByIdAndRemove(id)
    .then(() => res.redirect('/list'))
    .catch(err => next(err));
});

module.exports = router;
