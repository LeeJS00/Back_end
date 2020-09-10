var express = require('express');
var router = express.Router();

module.exports = (db) =>{
    router.post('/', function(req, res, next) {        
        //console.log(req.body)
        var now = new Date();
        db.get('end_users')
            .push({
                "name": req.body.name,
                "id": req.body.id,
                "phone": req.body.phone,
                "level": req.body.level,
                "time": now.toLocaleString()
            })
            .write()

        res.end()
    });
    router.get('/num', (req, res, next)=>{
        count = db.get('end_users').__wrapped__.end_users.length
        res.send(`${count}`)
    })
    return router;
}