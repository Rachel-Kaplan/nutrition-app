
var sqlMap = {
    
    user: {
        add: 'insert into users(id, name, price) values (0, ?, ?)',
        select: 'select * from users',
        delete: 'DELETE FROM users WHERE id=?',
        update: 'UPDATE users SET NAME=?,price=? WHERE id=?'
    }

}
module.exports = sqlMap;
