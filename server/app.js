const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

const userDao = require("./dao/userDao");
const { pool } = require('./conf/db.config');
const { getFileName, getTime } = require('./method');
console.log(pool);

const cors = require('cors');
app.use(cors());

// 文件上传下载中间件
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const zip = require('express-zip');
const os = require('os');
app.use(express.static('upload'));
app.use(express.static(__dirname));
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

app.get('/getWaterMark', (req, res) => {
    let params = {
        waterMark_works_id: req.query.waterMark_works_id
    };
    userDao.getWaterMark(params, r => {
        if (r.code != 200) {
            res.send('获取水印失败');
            res.end();
        } else {
            res.send(r);
            res.end();
        }
    })
})

app.post('/addwaterMark', (req, res) => {
    let params = req.body;
    userDao.addwaterMark(params, r => {
        if (r.code != 200) {
            res.send('获取水印失败');
            res.end();
        } else {
            res.send(r);
            res.end();
        }
    })
})

app.get('/getCollectSet', (req, res) => {
    let params = {
        user_id: req.query.user_id
    }
    userDao.getCollectSet(params, r => {
        if (r.code != 200) {
            res.send('获取图片失败');
            res.end();
        } else {
            let data = r.data.map(item => item);
            for (let i = 0; i < data.length; i++) {
                let id = data[i].works_pic_id;
                // console.log(id);
                const dirs = fs.readdirSync(`./upload/${id}`);
                for (let j = 0; j < dirs.length; j++) {
                    data[i].picName = dirs[0];
                    break;
                }
            }
            // console.log(data);
            res.send(data);
            res.end();
        }
    })
})

app.post('/findCollect', (req, res) => {
    let params = {
        user_id: req.query.user_id,
        works_id: req.query.works_id
    }
    userDao.findCollect(params, r => {
        if (r.code !== 200) {
            res.send('addHead失败');
            res.end();
        } else {
            console.log(r);
            if (r.data) {
                // console.log(r.data);
                res.send(r.data);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})

app.post('/deleteCollect', (req, res) => {
    let params = {
        user_id: req.query.user_id,
        works_id: req.query.works_id
    }
    userDao.deleteCollect(params, r => {
        if (r.code !== 200) {
            res.send('addHead失败');
            res.end();
        } else {
            // console.log(r);
            if (r.data) {
                // console.log(r.data);
                res.send(r.data);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})

app.post('/addCollect', (req, res) => {
    let params = {
        user_id: req.query.user_id,
        works_id: req.query.works_id
    }
    userDao.addCollect(params, r => {
        if (r.code !== 200) {
            res.send('addHead失败');
            res.end();
        } else {
            // console.log(r);
            if (r.data) {
                // console.log(r.data);
                res.send(r.data);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})

app.post('/addWorks', (req, res) => {
    let Params = req.body;
    // console.log(urlParam);
    userDao.addWorks(Params, r => {
        if (r.code !== 200) {
            res.send('添加失败');
            res.end();
        } else {
            console.log(r);
            if (r.data) {
                // res.send('Number of records added: ' + r.data.affectedRows);
                res.send({
                    'insertId': r.data.insertId,
                    'Number of records added': r.data.affectedRows
                });
                res.end();
            } else {
                res.send("addWorks");
                res.end();
            }
        }
    })
})

app.post('/deleteWork', (req, res) => {
    let params = {
        works_id: req.query.works_id
    }
    userDao.deleteWork(params, r => {
        if (r.code !== 200) {
            res.send('deleteWork失败');
            res.end();
        } else {
            // console.log(r);
            if (r.data) {
                // console.log(r.data);
                res.send(r.data);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})

app.get('/getMyWorks', (req, res) => {
    let params = {
        user_id: req.query.user_id
    }
    // console.log(params);

    userDao.getMyWorks(params, r => {
        if (r.code != 200) {
            res.send('获取图片失败');
            res.end();
        } else {
            let data = r.data.map(item => item);
            for (let i = 0; i < data.length; i++) {
                let id = data[i].works_pic_id;
                // console.log(id);
                const dirs = fs.readdirSync(`./upload/${id}`);
                for (let j = 0; j < dirs.length; j++) {
                    data[i].picName = dirs[0];
                    break;
                }
            }
            // console.log(data);
            res.send(data);
            res.end();
        }
    })

})

app.get('/getIp', (req, res) => {
    let IP = os.networkInterfaces();
    res.send(IP);
})

app.post('/addComment', (req, res) => {
    let Params = req.body;
    // console.log(urlParam);
    userDao.addComment(Params, r => {
        if (r.code !== 200) {
            res.send('添加失败');
            res.end();
        } else {
            // console.log(r);
            if (r.data) {
                // res.send('Number of records added: ' + r.data.affectedRows);
                res.send({
                    'insertId': r.data.insertId,
                    'Number of records added': r.data.affectedRows
                });
                res.end();
            } else {
                res.send("用户名重复");
                res.end();
            }
        }
    })
}),

    app.get('/getCommentSet', (req, res) => {
        let params = {
            works_id: req.query.works_id
        }
        // console.log(params);
        userDao.getCommentSet(params, r => {
            if (r.code !== 200) {
                res.send('addHead失败');
                res.end();
            } else {
                // console.log(r);
                if (r.data) {
                    // console.log(r.data);
                    res.send(r.data);
                    res.end();
                } else {
                    res.send("failed");
                    res.end();
                }
            }
        })
    })

app.get('/getWork', (req, res) => {
    let params = {
        works_id: req.query.works_id
    }
    console.log(params);
    userDao.getWork(params, r => {
        if (r.code !== 200) {
            res.send('addHead失败');
            res.end();
        } else {
            // console.log(r);
            if (r.data) {
                console.log(r.data[0].works_pic_id);
                const dir = getFileName(`./upload/${r.data[0].works_pic_id}`);
                for (let i = 0; i < dir.length; i++) {
                    dir[i] = `/upload/${r.data[0].works_pic_id}/${dir[i]}`;
                }
                r.data[0].dirPic = dir;
                res.send(r.data);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})

app.get('/getHead', (req, res) => {
    let params = {
        user_id: req.query.user_id
    }
    // console.log(params);
    userDao.getHead(params, r => {
        if (r.code !== 200) {
            res.send('addHead失败');
            res.end();
        } else {
            // console.log(r);
            if (r.data) {
                // console.log(r.data);
                res.send(r.data);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})

app.post('/changeHead', (req, res) => {
    let params = {
        head_pic: req.query.head_pic,
        user_id: req.query.user_id
    }
    console.log(params);
    userDao.changeHead(params, r => {
        if (r.code !== 200) {
            res.send('addHead失败');
            res.end();
        } else {
            console.log(r);
            if (r.data) {
                console.log(r.data);
                res.send(r.data);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})

app.get('/getAllPic', (req, res) => {
    userDao.getAllPic(r => {
        if (r.code != 200) {
            res.send('获取图片失败');
            res.end();
        } else {
            // console.log(r);
            let data = r.data.map(item => item);
            for (let i = 0; i < data.length; i++) {
                let id = data[i].works_pic_id;
                // console.log(id);
                const dirs = fs.readdirSync(`./upload/${id}`);
                for (let j = 0; j < dirs.length; j++) {
                    data[i].picName = dirs[0];
                    break;
                }
            }
            // console.log(data);
            res.send(data);
            res.end();
        }
    })
})

app.post('/getUserId', (req, res) => {
    const { user_name, user_password, user_email } = req.body;
    console.log(req.body);
    userDao.getUserId(r => {
        if (r.code !== 200) {
            res.send('查找用户信息失败');
            res.end();
        } else {
            console.log(r);
            let data;
            // if (r.data.length() == 0) r.data = [];
            data = r.data.filter(d => d.user_name === user_name && d.user_password === user_password && d.user_email === user_email);
            if (data.length == 1) res.send({ user_id: data[0].user_id, success: "success" });
            else res.send("没有找到对应的用户");
            res.end();
        }
    })
})

//添加头像
app.post('/addHead', (req, res) => {
    let params = {
        user_id: req.query.user_id,
        head_pic: "/headPic/default.png"
    }
    console.log(params);
    userDao.addHead(params, r => {
        if (r.code !== 200) {
            res.send('addHead失败');
            res.end();
        } else {
            console.log(r);
            if (r.data) {
                // console.log(r.data);
                res.send(r.data);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})

//获取pic_id
app.get('/getPicId', (req, res) => {
    const params = {
        user_id: req.query.user_id,
        work_pic_date: req.query.work_pic_date
    }
    console.log(params);
    userDao.getPicId(params, r => {
        if (r.code !== 200) {
            res.send('获取pic_id失败');
            res.end();
        } else {
            console.log(r);
            if (r.data) {
                console.log(r.data);
                res.send(r.data);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})


//添加pic_id
app.post('/addPicId', (req, res) => {
    const params = {
        user_id: req.query.user_id,
        work_pic_date: req.query.work_pic_date
    }
    console.log(params);
    userDao.addPicId(params, r => {
        if (r.code !== 200) {
            res.send('添加pic_id失败');
            res.end();
        } else {
            // console.log(r);
            if (r.data) {
                console.log(r);
                res.send('Number of records added: ' + r.data.affectedRows);
                res.end();
            } else {
                res.send("failed");
                res.end();
            }
        }
    })
})

app.post('/addUser', (req, res) => {
    let urlParam = req.body;
    // console.log(urlParam);
    userDao.adduser(urlParam, r => {
        if (r.code !== 200) {
            res.send('注册用户失败');
            res.end();
        } else {
            // console.log(r);
            if (r.data) {
                // res.send('Number of records added: ' + r.data.affectedRows);
                res.send({
                    'insertId': r.data.insertId,
                    'Number of records added': r.data.affectedRows
                });
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
            console.log(r);
            let data;
            // if (r.data.length() == 0) r.data = [];
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

app.post('/addHeadPic', multer({
    dest: 'headPic'
}).single('file'), (req, res) => {
    const dir = `./headPic/${req.query.user_id}`;
    // 如果存在文件夹
    if (fs.existsSync(dir)) {
        const newfileName = req.file.originalname;
        fs.renameSync(req.file.path, `headPic/${req.query.user_id}/${newfileName}`);
        res.send(req.file);
    } else {
        // 新建文件夹
        fs.mkdirSync(`./headPic/${req.query.user_id}`);
        // 更改存储路径
        // req.file.originalname -> 源文件名+"."+后缀名
        // const newfileName = req.query.work_id + "." + req.file.originalname.split('.')[1];
        const newfileName = req.file.originalname;
        fs.renameSync(req.file.path, `headPic/${req.query.user_id}/${newfileName}`);
        res.send(req.file);
    }
}
)

app.get('/deleteFile', (req, res) => {
    const dir = getFileName(`./upload/${req.query.pic_id}`);
    const file_name = req.query.file_name;
    let dir_name = dir.filter((value) => { if (value.indexOf(file_name) != -1) return value });
    console.log(dir_name);
    const url = `upload/${req.query.pic_id}/${dir_name}`;
    console.log(url);
    if (fs.existsSync(url)) {
        fs.unlinkSync(url);
        res.send({ data: 200 });
    } else {
        res.send({ data: 500 });
    }
})

app.post('/uploads', multer({
    dest: 'upload'
}).array('file', 10), (req, res) => {
    const dir = `./upload/${req.query.pic_id}`;
    if (fs.existsSync(dir)) {
        let newfileName;
        const files = req.files;
        const stat = fs.statSync(dir)
        if (stat.isDirectory()) {
            const dirs = fs.readdirSync(dir);
            let index = 0;
            dirs.forEach((value) => {
                // console.log(value);
                // index = value.slice('_')[1];
                index = value.split('_')[1];
                console.log(index);
            })
            index++;
            for (let i = 0; i < files.length; i++) {
                const F = files[i];
                // newfileName = req.query.pic_id + "_" + index + '.' + F.originalname.split('.')[1];
                newfileName = req.query.pic_id + "_" + index + '_' + F.originalname;
                fs.renameSync(F.path, `upload/${req.query.pic_id}/${newfileName}`);
                index++;
            }
            res.send(files);
        }
    } else {
        fs.mkdirSync(dir);
        let newfileName;
        const files = req.files;
        for (let i = 0; i < files.length; i++) {
            const F = files[i];
            // newfileName = req.query.pic_id + "_" + i + "." + F.originalname.split('.')[1];
            newfileName = req.query.pic_id + "_" + i + "_" + F.originalname;
            fs.renameSync(F.path, `upload/${req.query.pic_id}/${newfileName}`);
        }
        res.send(files);

    }
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