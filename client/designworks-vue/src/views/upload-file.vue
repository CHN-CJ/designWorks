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
            <el-option label="其他" value="other"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="添加水印">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="选择添加水印用户将无法下载"
            placement="right-start"
          >
            <el-switch v-model="form.delivery"></el-switch>
          </el-tooltip>
        </el-form-item>
        <el-form
          :inline="true"
          :model="waterMark"
          class="demo-form-inline"
          v-show="form.delivery"
        >
          <el-form-item label="水印一">
            <el-input
              v-model="waterMark.name_one"
              placeholder="必填"
            ></el-input>
          </el-form-item>
          <el-form-item label="水印二">
            <el-input
              v-model="waterMark.name_two"
              placeholder="选填"
            ></el-input>
          </el-form-item>
        </el-form>

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
import store from "../vuex/store.js";
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

const waterMark = reactive({
  name_one: "",
  name_two: "",
});

const works_id = ref(0);

onMounted(async () => {
  user_id = store.state.user_id;
  work_pic_date = getTime();
  await addPicId(user_id, work_pic_date);
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

const onSubmit = async () => {
  console.log("submit!");
  // 判断是否上传了文件
  // 如果没有，那么不能上传

  await axios
    .post("/api/addWorks", {
      user_id: store.state.user_id,
      works_name: form.name,
      works_date: getTime(),
      works_views: 0,
      works_type: form.region,
      works_mark: form.delivery == true ? 1 : 0,
      works_write: form.desc,
      works_owner: form.owner,
      works_pic_id: pic_id.value,
    })
    .then((res) => {
      console.log(res.data);
      works_id.value = res.data.insertId;
      alert("上传成功");
    })
    .catch((err) => {
      console.log(err);
    });

  if (form.delivery) {
    await axios
      .post("/api/addwaterMark", {
        waterMark_name_one: waterMark.name_one,
        waterMark_name_two: waterMark.name_two,
        waterMark_works_id: works_id.value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

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

.demo-form-inline {
  // /deep/el-input {
  //   width: 110px;
  // }
  width: 100%;
  .el-input {
    min-width: 120px;
  }
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
  margin-top: 10px;
  .upload_form {
    width: 42%;
    min-width: 350px;
    border: 0;
    padding: 20px;
    line-height: 1.5715;
    background-color: #fff;
    border-radius: 18px;
    margin-top: 20px;
  }
  .upload_file {
    width: 42%;
    min-width: 350px;
    padding: 20px;
    // height: 24vh;
    margin-bottom: 15px;
    border: 0;
    line-height: 1.5715;
    background-color: #fff;
    border-radius: 18px;
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
