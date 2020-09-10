const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

module.exports = ()=>{
    const adapter = new FileSync('./db/db.json')
    const db = low(adapter)

    db.defaults({ end_users: [], answers: {} }).write();
    return db;
}