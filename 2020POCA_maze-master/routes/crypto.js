var express = require('express');
var router = express.Router();
const crypto = require('crypto')

const base64crypto = password => {
	return crypto.createHash('sha512').update(password).digest('base64')
}

router.post('/', (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.send(base64crypto(req.body.password));
})

module.exports = router;