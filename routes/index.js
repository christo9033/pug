let express = require('express');

let router = express.Router();


router.get('/coucou-pug', function (req, res) {
  res.render('coucou.pug', { sayHello: 'Hello buddy' })
})

module.exports = router;