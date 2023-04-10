<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="作品名">
        <el-input v-model="form.name" class="nameInput"></el-input>
      </el-form-item>
      <el-form-item label="作品类型">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="作品文案">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <el-upload
      class="upload-demo"
      drag="true"
      action="http://127.0.0.1:8081/uploads"
      multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script setup>
//第一个思路
/*
//userid 不唯一
在进入页面时往作品表中插入用户id，生成作品id
通过作品id生成对应文件存储图片
//可以往里面添加时间，确定唯一性
*/
//第二个思路
/*
pic表
id | user_id | pic_time
利用pic的id作为文件夹名称，具有唯一性
同时给 作品表 添加 pic_id 字段
*/
import { onMounted } from "vue";
import axios from "axios";
let user_id;
let work_pic_date;
let pic_id;
let form = {
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
};
function onSubmit() {
  console.log("submit!");
}
// onMounted(async () => {
//   user_id = 3;
//   work_pic_date = getTime();
//   await addPicId(user_id, work_pic_date);
//   await getPicId(user_id, work_pic_date);
//   console.log(pic_id);
// });

async function addPicId(user_id, work_pic_date) {
  await axios
    .get(`/api/addPicId?user_id=${user_id}&work_pic_date=${work_pic_date}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return pic_id;
}

async function getPicId(user_id, work_pic_date) {
  await axios
    .get(`/api/getPicId?user_id=${user_id}&work_pic_date=${work_pic_date}`)
    .then((res) => {
      console.log(res.data);
      pic_id = res.data[0].pic_id;
      console.log(pic_id);
      return pic_id;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getTime() {
  let date = new Date();
  let dateDetail = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  let time = {
    Hours: date.getHours(),
    minutes: date.getMinutes(),
    seconeds: date.getSeconds(),
  };
  if (dateDetail.month < 10) dateDetail.month = "0" + dateDetail.month;
  if (dateDetail.day < 10) dateDetail.day = "0" + dateDetail.day;
  const createTime =
    dateDetail.year +
    "-" +
    dateDetail.month +
    "-" +
    dateDetail.day +
    " " +
    time.Hours +
    ":" +
    time.minutes +
    ":" +
    time.seconeds;
  console.log(createTime);
  return createTime;
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
</style>

