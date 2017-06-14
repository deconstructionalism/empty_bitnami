var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/aha', function(req, res, next) {
  res.render('index', { title: 'Hey Ben',
                        message: 'I figured out how to serve stuff' });
});

module.exports = router;
