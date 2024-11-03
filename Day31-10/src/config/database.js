const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'7905',
    database:'WebStack'
})
 db.connect((err)=>{
    if(err){
        console.log("chua the ket noi db")
        return
    }
    console.log("da ket noi thanh cong")
 })
 module.exports = db;