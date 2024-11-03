const db = require('../config/database')
const User = {
    getAll: (callback) =>{
        db.query('SELECT * FROM user', callback);

    },
    create : (name,email, mobile , password, callback) => {
        db.query('INSERT INTO user (name , email, mobile, password) VALUES ( ?,?,? ,?)',[name, email, mobile,password], callback)
    },
    update : (id, name, email, mobile, password, callback ) => {
        db.query('UPDATE user SET name = ? , email = ? ,mobile =? , password =?  WHERE id = ? ',[name,email,mobile,password,id ], callback)
    },
    delete : (id, callback) => {
        db.query('DELETE FROM user WHERE id = ?', [id], callback);
    }
    
}
module.exports = User;