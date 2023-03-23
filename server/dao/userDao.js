let { pool } = require("../conf/db.config");
let { addUser, findUsers, addComment, getWorkComment } = require('./userMapper');

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
                    console.log("添加用户err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },

    findUsers: function (callback) {
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(findUsers, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("查找用户err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },

    addComment: function (params, callback) {
        let sqlparam = [
            params.comment_user_id,
            params.comment_text,
            params.comment_work_id,
            params.comment_p_user_id ? params.comment_p_user_id : 0,
            params.comment_date
        ];
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addComment, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("添加评论err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },

    getWorkComment: function (work_id, callback) {
        let sqlparam = work_id;
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(getWorkComment, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("查找作品评论err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    }

}