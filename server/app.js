const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

const userDao = require("./dao/userDao");
const { pool } = require('./conf/db.config');
const { getFileName, getTime } = require('./method');
console.log(pool);

// 文件上传下载中间件
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const zip = require('express-zip');
app.use(express.static('upload'));
// http://localhost:8081/1/1.jpg

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});

app.post('/addUser', (req, res) => {
    let urlParam = req.body;
    console.log(urlParam);
    userDao.adduser(urlParam, r => {
        if (r.code !== 200) {
            res.send('注册用户失败');
            res.end();
        } else {
            console.log(r);
            if (r.data) {
                res.send('Number of records added: ' + r.data.affectedRows);
                res.end();
            } else {
                res.send("用户名重复");
                res.end();
            }
        }
    })
})

app.post('/findUsers', (req, res) => {
    console.log(req.body);
    const { user_name, user_password } = req.body;
    userDao.findUsers(r => {
        if (r.code !== 200) {
            res.send('查找用户信息失败');
            res.end();
        } else {
            // console.log(r);
            let data;
            data = r.data.filter(d => d.user_name === user_name && d.user_password === user_password);
            if (data.length == 1) res.send({ data: data[0], success: "success" });
            else res.send("没有找到对应的用户");
            res.end();
        }
    })
})


app.post('/upload', multer({
    dest: 'upload'
}).single('file'), (req, res) => {
    // 新建文件夹
    fs.mkdirSync(`./upload/${req.query.work_id}`);
    // 更改存储路径
    // req.file.originalname -> 源文件名+"."+后缀名
    const newfileName = req.query.work_id + "." + req.file.originalname.split('.')[1];
    fs.renameSync(req.file.path, `upload/${req.query.work_id}/${newfileName}`);
    res.send(req.file);
}
)

app.post('/uploads', multer({
    dest: 'upload'
}).array('file', 10), (req, res) => {
    fs.mkdirSync(`./upload/${req.query.work_id}`);
    let newfileName;
    const files = req.files;
    for (let i = 0; i < files.length; i++) {
        const F = files[i];
        newfileName = req.query.work_id + "_" + i + "." + F.originalname.split('.')[1];
        fs.renameSync(F.path, `upload/${req.query.work_id}/${newfileName}`);
    }
    res.send(files);
}
)

//单文件下载模块
app.get('/download', (req, res) => {
    const fileName = getFileName(`./upload/${req.query.work_id}`)
    res.download(`upload/${req.query.work_id}/${fileName[0]}`);
})

//前端下载zip文件
app.get('/downloadZip', function (req, res) {
    const work_id = req.query.work_id;
    const fileName = getFileName(`./upload/${req.query.work_id}`);
    let zipfile = [];
    for (let i = 0; i < fileName.length; i++) {
        zipfile.push({
            path: `./upload/${work_id}/${fileName[i]}`,
            name: `${fileName[i]}`
        });
    }
    console.log(zipfile);
    // res.zip([
    //     { path: './upload/1/1.jpg', name: '1.jpg' }
    // ]);
    res.zip(zipfile);
})


app.post('/addCommentTable', (req, res) => {
    // 评论 => 是以表单的形式发送的吗？

    let params = {
        comment_user_id: 1,
        comment_text: "测试评论",
        comment_work_id: 2,
        comment_p_user_id: 0,
        comment_date: getTime()
    }
    userDao.addComment(params, r => {
        if (r.code !== 200) {
            res.send('添加评论失败');
            res.end();
        } else {
            console.log(r);
            if (r.data) {
                res.send('Number of records added: ' + r.data.affectedRows);
            }
            res.end();
        }
    })
})

// 获取用户名的话还需要联表
app.get('/getWorkComment', (req, res) => {
    const work_id = req.query.work_id;
    userDao.getWorkComment(work_id, r => {
        if (r.code !== 200) {
            res.send('查找作品评论失败');
            res.end();
        } else {
            console.log(r);
            if (r.data) {
                console.log(r.data);
                // res.send('Number of records added: ' + r.data.affectedRows);
                res.send(r.data);
            }
            res.end();
        }
    })
})

//点赞->获取评论id->点赞数+1
//判断是否是当前用户的点赞->like_table


// app.post('/addCommentTable', (req, res) => {

//     let sql = `CREATE table ${req.query.workId}commenttable(pid int);`

//     pool.getConnection(function (err, connection) {
//         if (err) { throw err }
//         connection.query(sql, function (error, results, fields) {
//             connection.release();
//             let apiRes = {
//                 code: 0,
//                 msg: "成功",
//                 data: results
//             }
//             res.send(apiRes);
//         })
//     })

//     // console.log(req.query.workId);
//     // res.send({ code: 200 });
// })



app.listen('8081', () => {
    console.log('Server is running on PORT 8081');
})