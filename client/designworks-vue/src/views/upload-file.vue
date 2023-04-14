<template>
  <div class="upload">
    <div class="upload_form">
      <el-form :model="form" label-width="80px" label-position="left">
        <el-form-item label="作品名">
          <el-input v-model="form.name" class="nameInput"></el-input>
        </el-form-item>
        <el-form-item label="作品文案">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="作品类型">
          <el-select v-model="form.region" placeholder="请选择作品类型">
            <el-option label="广告设计" value="advertisement"></el-option>
            <el-option label="海报设计" value="poster"></el-option>
            <el-option label="插画设计" value="illustration"></el-option>
            <el-option label="字体设计" value="font"></el-option>
            <el-option label="UI设计" value="ui"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="添加水印">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="如果有多个创作者，中间使用#隔开，例：张三#李四"
          placement="bottom"
        >
          <el-form-item label="创作者">
            <el-input type="textarea" v-model="form.owner"></el-input>
          </el-form-item>
        </el-tooltip>
      </el-form>
    </div>
    <div class="upload_file">
      <el-upload
        class="upload-demo"
        :drag="state.isdrag"
        :action="state.url"
        :on-remove="handleRemove"
        multiple
      >
        <el-icon class="el-icon--upload">
          <upload-filled />
        </el-icon>
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
    <div class="upload_btn">
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </div>
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
import { ref, reactive } from "vue";
import axios from "axios";
let user_id;
let work_pic_date;
const state = reactive({
  isdrag: true,
  url: `http://127.0.0.1:8081/uploads?pic_id`,
});
const pic_id = ref(-1);
//作品文案可以为空
const form = reactive({
  name: "",
  desc: "",
  region: "",
  delivery: false,
  owner: "",
});

const onSubmit = () => {
  console.log("submit!");
};
onMounted(async () => {
  user_id = 4;
  work_pic_date = getTime();
  console.log(await addPicId(user_id, work_pic_date));
  await getPicId(user_id, work_pic_date);
  console.log(pic_id.value);
  state.url = state.url + "=" + pic_id.value;
});

// 往 pic_name 表中添加一条记录
async function addPicId(user_id, work_pic_date) {
  await axios
    .post(`/api/addPicId?user_id=${user_id}&work_pic_date=${work_pic_date}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return;
}

// 获取到 pic_name 表的 pic_id
async function getPicId(user_id, work_pic_date) {
  await axios
    .get(`/api/getPicId?user_id=${user_id}&work_pic_date=${work_pic_date}`)
    .then((res) => {
      console.log(res.data);
      pic_id.value = res.data[0].pic_id;
      console.log(pic_id);
      return pic_id;
    })
    .catch((err) => {
      console.log(err);
    });
}

const handleRemove = async (file, uploadFiles) => {
  console.log(file.name);
  let file_name = file.name;
  await axios
    .get(`/api/deleteFile?pic_id=${pic_id.value}&file_name=${file_name}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

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
  --hue: 223;
  --bg: hsl(var(--hue), 10%, 85%);
  --fg: hsl(var(--hue), 10%, 5%);
  --trans-dur: 0.3s;
  padding: 0;
  margin: 0;
}
.upload {
  width: 100vw;
  height: 100vh;
  // box-sizing: border-box;
  background-color: #f7f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  .upload_form {
    width: 42%;
    min-width: 350px;
    border: 0;
    padding: 30px;
    line-height: 1.5715;
    background-color: #fff;
    border-radius: 16px;
    margin-top: 20px;
  }
  .upload_file {
    width: 42%;
    min-width: 350px;
    padding: 30px;
    // height: 24vh;
    margin-bottom: 15px;
    border: 0;
    line-height: 1.5715;
    background-color: #fff;
    border-radius: 12px;

    .upload-demo {
      width: 100%;
      height: 100%;
      border: 0;
      background-color: hsl(var(--hue), 10%, 95%);
      border-radius: 1em;
      // box-shadow: 0 0.75em 1em hsla(var(--hue), 10%, 5%, 0.3);
      color: hsl(var(--hue), 10%, 5%);
      position: relative;
      overflow: hidden;

      &:before {
        background-color: hsl(223, 90%, 60%);
        border-radius: 50%;
        content: "";
        filter: blur(60px);
        opacity: 0.15;
        position: absolute;
        top: -8em;
        right: -15em;
        width: 20em;
        height: 20em;
        z-index: 100;
        transition: background-color var(--trans-dur);
      }
    }
  }
}
</style>
