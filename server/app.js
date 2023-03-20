const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

const userDao = require("./dao/userDao");
const { pool } = require('./conf/db.config')
console.log(pool);

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

app.post('/addCommentTable', (req, res) => {

    let sql = `CREATE table ${req.query.workId}commenttable(pid int);`

    pool.getConnection(function (err, connection) {
        if (err) { throw err }
        connection.query(sql, function (error, results, fields) {
            connection.release();
            let apiRes = {
                code: 0,
                msg: "成功",
                data: results
            }
            res.send(apiRes);
        })
    })

    // console.log(req.query.workId);
    // res.send({ code: 200 });
})



app.listen('8081', () => {
    console.log('Server is running on PORT 8081');
})