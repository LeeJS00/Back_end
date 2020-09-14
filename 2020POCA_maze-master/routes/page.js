var express = require('express');
var router = express.Router();
const cacheManager = require('./caches')

module.exports = (db) =>{
    router.post('/',(req, res, next)=>{
        var result={r:false,data:[],flag:0};
        var i = 0;
        for(i = 0 ;i< req.body.pid;i++) {
            answer = db.get('answers').__wrapped__.answers[i];
            result.data.push(cacheManager.get(i));
            if(cacheManager.get(i) != null) {
                result.flag++;
            }
        }        
        if(result.flag === req.body.pid-1) result.r = true;
        res.send(result)
    });

    return router;
}