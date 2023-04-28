<template>
  <div>
    <!-- background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="toAllPic()">发现</el-menu-item>
      <el-menu-item index="2" @click="toUpload()">上传</el-menu-item>
      <el-menu-item index="4" @click="toShowMessage()">我的</el-menu-item>
      <el-sub-menu index="3">
        <template #title>Workspace</template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-sub-menu index="3-4">
          <template #title>item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
          <el-menu-item index="3-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
    <router-view></router-view>
    <div class="login_register" v-if="loginFlag">
      <!-- <div class="login">登录</div>
      <div class="register">注册</div> -->
      <!-- <a class="login" @click="$emit('loginRegister', false)">登录</a>
      <a class="register" @click="$emit('loginRegister', false)">注册</a> -->
      <a class="login" @click="toLoginRegister()">登录</a>
      <a class="register" @click="toLoginRegister()">注册</a>
    </div>
    <div class="login_register" v-else>
      <img :src="HeadUrl" alt="" />
      {{ store.state.user_name }}
    </div>
  </div>
</template>

<script setup>
//瀑布流展示内容
//先不考虑怎样展示
//首先需要拿到照片和数据

/**
    {
        "head_pic": "/headPic/default.png",
        "user_name": "dundundun1",
        "works_id": 2,
        "works_name": "three",
        "works_date": "2023-04-18T08:25:14.000Z",
        "works_views": 0,
        "works_type": "poster",
        "works_owner": null,
        "works_pic_id": 176,
        "user_id": 74
    }
*/

//
import axios from "axios";
import { onMounted, onUpdated } from "vue";
import { ref, watch } from "vue";
import store from "../vuex/store.js";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};

const loginFlag = ref(true);
const HeadUrl = ref("");

watch(
  () => router.currentRoute.value,
  async () => {
    console.log(router.currentRoute.value.fullPath);
    if (store.state.user_id != "") {
      console.log(store.state.user_id);
      loginFlag.value = false;

      //可以在store中多设置个变量来判断是否需要更新头像
      //获取头像
      // await
      await axios
        .get(`/api/getHead?user_id=${store.state.user_id}`)
        .then((res) => {
          console.log(res);
          HeadUrl.value = `http://localhost:8081${res.data[0].head_pic}`;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  { immediate: true }
);

const toAllPic = () => {
  router.push("/allPic");
};

const toUpload = () => {
  router.push("./upload");
};

const toShowMessage = () => {
  router.push("./message");
};

const toLoginRegister = () => {
  router.push("./login_register");
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.el-menu-demo {
  position: relative;
  width: 100%;
  background: #fff;
}
.login_register {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .login {
    width: 40px;
    height: 20px;
    border-radius: 5px;
    padding: 10px 10px;
    background: transparent;
    cursor: pointer;
  }
  .register {
    width: 40px;
    height: 20px;
    padding: 10px 10px;
    background: transparent;
    border: 1px solid #0d1117;
    border-radius: 6px;
  }
}

img {
  width: 40px;
  height: 40px;
  overflow-clip-margin: content-box;
  overflow: clip;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  border-radius: 50%;
}
</style>