const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '7905',
    database : 'WebStack'

})
db.connect((err) => {
    if(err){
        console.log('Không thể kết nối', err)
        return;
    }
    console.log("Kết nối thành công ")
})

module.exports = db