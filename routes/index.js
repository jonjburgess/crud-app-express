var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/kittens', db.getAllKittens);
router.get('/api/kittens/:id', db.getSingleKitten);
router.post('/api/kittens', db.createKitten);
router.put('/api/kittens/:id', db.updateKitten);
router.delete('/api/kittens/:id', db.removeKitten);

module.exports = router;
