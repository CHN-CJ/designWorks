<template>
  <div>
    <!-- <homePage
      @login-register="(changeflag) => (flag.value = changeflag)"
      v-if="flag.value"
    ></homePage>
    <loginRegister v-else></loginRegister> -->
    <homePage></homePage>
  </div>
  <!-- <router-link to="/open">Go to opening</router-link>
<router-view></router-view> -->
</template>

<script setup>
/*
 * 将homePage包起来，形成另一个组件
 * 组件动态切换
 */
import { onMounted, ref } from "vue";
import axios from "axios";
import store from "./vuex/store.js";

import openingAnimation from "./views/opening-animation.vue";
import signInUp from "./views/sign-in-up.vue";
import uploadFile from "./views/upload-file.vue";
import tryWatermark from "./views/try-watermark.vue";
import showFile from "./views/show-file.vue";
import loginRegister from "./views/login-register.vue";
import homePage from "./views/home-page.vue";
import allPic from "./views/allPic.vue";
import showMessage from "./views/show-message.vue";

const netWork = ref("");
const href = ref("");

onMounted(async () => {
  // await window.addEventListener("beforeunload", beforeunloadFn);
  // href.value = window.location.href;
  // href.value = href.value.replace(/:\d+/, "");
  // store.commit("initnetWork", href.value);
  // console.log("store.state.netWork", store.state.netWork);
  await axios
    .get(`/api/getIp`)
    .then(async (res) => {
      console.log(res);
      for (let i = 0; i < res.data.WLAN.length; i++) {
        // if (res.data.WLAN[i].netmask === "255.255.255.0") {
        //   netWork.value = res.data.WLAN[i].address;
        // }
        if (res.data.WLAN[i].family === "IPv4") {
          netWork.value = res.data.WLAN[i].address;
        }
      }
      console.log("netWork:" + res.data);
      store.commit("initnetWork", netWork.value);
      console.log("store.state.netWork", store.state.netWork);
    })
    .catch((err) => {
      console.log(err);
    });
});

const beforeunloadFn = () => {
  if (JSON.parse(localStorage.getItem("user"))[0]) {
    let user = JSON.parse(localStorage.getItem("user"))[0];
    store.commit("initUser", user);
    console.log(store.state);
    console.log("aaa");
  }
};

const flag = ref(true);

const toLogin = (changeflag) => {
  flag.value = changeflag;
};

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

