const mysql = require("mysql");

let database = 'designworks';

let mysql_config = {
    // 最大连接数
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: database,
    connectTimeout: 10000,
};

let pool = mysql.createPool(mysql_config);

pool.on('connection', msg => {
    console.log(msg.state);
});

pool.on('error', err => {
    console.log('database error.');
})

module.exports = {
    pool
}


