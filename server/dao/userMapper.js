module.exports = {
    //收藏功能
    getWaterMark: "SELECT * FROM designworks.t_watermark WHERE waterMark_works_id = ?",
    addwaterMark: "INSERT INTO designworks.t_watermark (waterMark_name_one, waterMark_name_two, waterMark_works_id) VALUES (?, ?, ?)",
    getCollectSet: "SELECT * FROM designworks.t_collectset WHERE user_id = ?",
    findCollect: "SELECT * FROM designworks.t_collect WHERE user_id = ? && works_id = ?",
    deleteCollect: "DELETE FROM designworks.t_collect WHERE user_id = ? && works_id = ?",
    addCollect: "INSERT INTO designworks.t_collect (user_id, works_id) VALUES (?, ?)",
    addWorks: "INSERT INTO designworks.t_works (user_id, works_name, works_date, works_views, works_type, works_mark,works_write, works_owner, works_pic_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    deleteWork: "DELETE FROM designworks.t_works WHERE works_id = ?",
    getMyWorks: "SELECT * FROM designworks.t_allpic WHERE user_id = ?",
    addComment: "INSERT INTO designworks.t_comment (comment_user_id, comment_text, comment_work_id, comment_pid, comment_date, comment_like_num) VALUES (?, ?, ?, ?, ?, ?)",
    getCommentSet: "SELECT * FROM designworks.t_commentset WHERE comment_work_id = ?",
    getWork: "SELECT * FROM designworks.t_filemessage WHERE works_id = ?",
    getHead: "SELECT head_pic FROM designworks.t_headpicture where user_id = ?",
    changeHead: "update designworks.t_headpicture set head_pic = (?) where user_id= (?) ",
    getAllPic: "SELECT * from designworks.t_allpic",
    addHead: "INSERT INTO designworks.t_headpicture(user_id, head_pic) VALUES (?, ?)",
    addUser: "INSERT INTO designworks.t_user(user_name, user_password, user_email) VALUES (?, ?, ?);",
    // getUserId: 
    findUsers: "SELECT * FROM designworks.t_user",
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