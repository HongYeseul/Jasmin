var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/test', function(req, res, next) {
  console.log(req.body);
  res.send('수신되었습니다.');
});

module.exports = router;
