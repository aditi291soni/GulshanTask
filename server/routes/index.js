var express = require('express');
const { Registeruser } = require('../Controller/Register');
var router = express.Router();

/* GET home page. */

router.post('/register', Registeruser);

module.exports = router;
