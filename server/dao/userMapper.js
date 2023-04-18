module.exports = {
    addHead: "INSERT INTO designworks.t_headpicture(user_id, head_pic) VALUES (?, ?)",
    addUser: "INSERT INTO designworks.t_user(user_name, user_password, user_email) VALUES (?, ?, ?);",
    // getUserId: 
    findUsers: "SELECT * FROM designworks.t_user",
    addComment: `INSERT INTO designworks.comment_table
    (comment_user_id, comment_text, comment_work_id, comment_p_user_id, comment_date, comment_like_num)
    VALUES (?, ?, ?, ?, ?, 0)`,
    //comment_id 作为标识
    getWorkComment: `SELECT comment_id comment_user_id, comment_text, comment_p_user_id, comment_date, comment_like_num
    FROM designworks.comment_table where comment_work_id = ?`,
    //获取评论id
    sellectComment_id: `SELECT comment_id FROM designworks.comment_table where comment_work_id = ? AND `,
    //获取点赞数
    sellectCommentLikeNum: 'SELECT comment_like_num FROM designworks.comment_table where comment_id = ? ',
    //更新点赞数
    updateCommentLikeNum: 'UPDATE designworks.comment_table SET comment_like_num = ? WHERE comment_id = ? ',
    //更新点赞表
    addLike: 'INSERT INTO designworks.like_table (like_user_id, like_comment_id) VALUES (?, ?)',
    addWorkId: 'INSERT INTO designworks.userdesignworks (user_id) VALUES (?) ',
    //添加pic_id
    addPicId: 'INSERT INTO designworks.pic_name (user_id, work_pic_date) VALUES (?, ?)',
    //获取pic_id
    getPicId: 'SELECT pic_id FROM designworks.pic_name where user_id = ? AND work_pic_date = ?'
}