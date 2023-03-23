const fs = require('fs');

module.exports = {
    getTime: function () {
        let date = new Date();
        let dateDetail = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        }
        let time = {
            Hours: date.getHours(),
            minutes: date.getMinutes(),
            seconeds: date.getSeconds()
        }
        if (dateDetail.month < 10) dateDetail.month = "0" + dateDetail.month;
        if (dateDetail.day < 10) dateDetail.day = "0" + dateDetail.day;
        const createTime = dateDetail.year + "-" + dateDetail.month + "-" + dateDetail.day + " "
            + time.Hours + ":" + time.minutes + ":" + time.seconeds;
        console.log(createTime);
        return createTime;
    },

    //获取文件夹中的文件名
    getFileName: function (dir) {
        let fileName = [];
        const stat = fs.statSync(dir)
        //判断是不是目录
        if (stat.isDirectory()) {
            const dirs = fs.readdirSync(dir);
            dirs.forEach(value => {
                fileName.push(value);
            })
        } else if (stat.isFile()) {
            return "dir is a file";
        }
        return fileName;
    }
}