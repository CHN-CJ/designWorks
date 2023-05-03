let { pool } = require("../conf/db.config");
let { addUser, findUsers, getWorkComment, addWorkId, addPicId, getPicId, addHead, getUserId,
    getAllPic, changeHead, getHead, getWork, getCommentSet, addComment, getMyWorks, deleteWork,
    addWorks, addCollect, deleteCollect, findCollect, getCollectSet, addwaterMark, getWaterMark } = require('./userMapper');

module.exports = {
    getWaterMark: function (params, callback) {
        let sqlparam = [
            params.waterMark_works_id
        ];
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(getWaterMark, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("getWaterMark err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    addwaterMark: function (params, callback) {
        let sqlparam = [
            params.waterMark_name_one,
            params.waterMark_name_two,
            params.waterMark_works_id
        ];
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addwaterMark, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("addwaterMark err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    getCollectSet: function (params, callback) {
        let sqlparam = [params.user_id];
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(getCollectSet, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("getCollectSet err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    findCollect: function (params, callback) {
        let sqlparam = [
            params.user_id,
            params.works_id,
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(findCollect, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("findCollect err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    deleteCollect: function (params, callback) {
        let sqlparam = [
            params.user_id,
            params.works_id,
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(deleteCollect, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("deleteCollect err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    addCollect: function (params, callback) {
        let sqlparam = [
            params.user_id,
            params.works_id,
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addCollect, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("addWorks err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    addWorks: function (params, callback) {
        let sqlparam = [
            params.user_id,
            params.works_name,
            params.works_date,
            params.works_views,
            params.works_type,
            params.works_mark,
            params.works_write,
            params.works_owner,
            params.works_pic_id
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addWorks, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("addWorks err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    deleteWork: function (params, callback) {
        let sqlparam = [
            params.works_id
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(deleteWork, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("getMyWorks err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    getMyWorks: function (params, callback) {
        let sqlparam = [
            params.user_id
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(getMyWorks, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("getMyWorks err");
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
            params.comment_pid,
            params.comment_date,
            params.comment_like_num
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addComment, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("getCommentSet err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    getCommentSet: function (params, callback) {
        let sqlparam = [
            params.works_id
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(getCommentSet, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("getCommentSet err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    getWork: function (params, callback) {
        let sqlparam = [
            params.works_id
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(getWork, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("getWorkMessage err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    getHead: function (params, callback) {
        let sqlparam = [
            params.user_id
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(getHead, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("getsHead err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    changeHead: function (params, callback) {
        let sqlparam = [
            params.head_pic,
            params.user_id
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(changeHead, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("changesHead err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },
    getAllPic: function (callback) {
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(getAllPic, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("获取所有图片 err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },

    getUserId: function (callback) {
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

    addHead: function (params, callback) {
        let sqlparam = [
            params.user_id,
            params.head_pic
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addHead, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("addHead err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },

    getPicId: function (params, callback) {
        let sqlparam = [
            params.user_id,
            params.work_pic_date
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(getPicId, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("获取pic_id err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },

    addPicId: function (params, callback) {
        let sqlparam = [
            params.user_id,
            params.work_pic_date
        ]
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addPicId, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("添加pic_id err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },

    addWorkId: function (params, callback) {
        let sqlparam = params;
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addWorkId, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("获取work_id err");
                    throw err;
                }
                callback({ code: 200, data: result });
            })
            connection.release();
        })
    },

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
            params.user_password,
            params.user_email
        ];
        pool.getConnection((err, connection) => {
            if (err) { throw err; };
            connection.query(addUser, sqlparam, function (error, result, fields) {
                if (err) {
                    connection.release();
                    console.log("添加用户err");
                    throw err;
                }
                console.log(result);
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