let { pool } = require("../conf/db.config");
let { addUser } = require('./userMapper');

module.exports = {
    add: function (params, callback) {
        let sqlparam = [
            params.user_name,
            params.user_password
        ]
        pool.query(addUser, sqlparam, (err, result) => {
            if (err) {
                console.log(111);
                throw err;
            }
            callback({ code: 200, data: result })
        })
    },

    adduser: function (params, callback) {
        let sqlparam = [
            params.user_name,
            params.user_password
        ];
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addUser, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log(111);
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    }

}