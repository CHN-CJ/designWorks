<template>
  <!-- <div class="opening-animation">  
  <openingAnimation></openingAnimation>
</div> -->
  <!-- <signInUp></signInUp> -->
  <!-- <uploadFile></uploadFile> -->
  <!-- <tryWatermark></tryWatermark> -->
  <!-- <showFile></showFile> -->
  <!-- <div>
    <LoginRegister></LoginRegister>
  </div> -->
  <loginRegister></loginRegister>

  <!-- <router-link to="/open">Go to opening</router-link>
<router-view></router-view> -->
</template>

<script setup>
import { onMounted } from "vue";
import axios from "axios";

import openingAnimation from "./views/opening-animation.vue";
import signInUp from "./views/sign-in-up.vue";
import uploadFile from "./views/upload-file.vue";
import tryWatermark from "./views/try-watermark.vue";
import showFile from "./views/show-file.vue";
import loginRegister from "./views/login-register.vue";

// 前端接受 zip 文件要以 blob 的方式
// 这里创建了一个a标签并自动点击实现下载功能，并且及时释放内存
// onMounted(() => {
//   axios.get('/api/downloadZip?work_id=2', {
//     responseType: "blob",
//   })
//   .then((response) => {
//     let blob = new Blob([response.data], {type: "application/zip"});
//     let url = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     //重命名文件
//     link.download = "pic.zip";
//     link.click();
//     //释放内存
//     URL.revokeObjectURL(url);
//   }).catch(err => {
//     console.log(err);
//   })
// })

// onMounted(() =>{
//   axios.post('http://127.0.0.1:8081/getUser',{})
//   .then(res=> {
//     console.log(res);
//   }).catch(err => {
//     console.log(err);
//   })
// })

// onMounted(() =>{
//   axios.post('/api/getUser',{})
//   .then(res=> {
//     console.log(res);
//   }).catch(err => {
//     console.log(err);
//   })
// })
</script>

<style lang="scss" scoped>
/*
  yarn add xxx -s
  qs 序列化
  lodash 防抖
*/

body {
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
}

// .opening-animation {
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-content: center;
//   justify-content: center;
// }
</style>

