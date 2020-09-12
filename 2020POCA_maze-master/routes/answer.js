var express = require('express');
var router = express.Router();
const crypto = require('crypto')

const base64crypto = password => {
	return crypto.createHash('sha512').update(password).digest('base64')
}

module.exports = (db) =>{
    router.post('/',(req, res, next)=>{
        answer = db.get('answers').__wrapped__.answers[req.body.pid]
        result = "/"
        console.log(base64crypto(req.body.input));
        if(answer == base64crypto(req.body.input)){
            result = result + answer;
        }

        res.send(result)
    });

    return router;
}