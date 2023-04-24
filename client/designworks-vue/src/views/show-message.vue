<template>
  <div>
    <div>
      <img :src="imageHead" class="imageHead" />
    </div>
    <el-upload
      class="avatar-uploader"
      :action="changeimageHead"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      更改头像
      <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
    </el-upload>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import store from "../vuex/store.js";

const imageUrl = ref("");
// const imageHead = ref("http://localhost:8081/headPic/default.png");
const imageHead = ref("");
const changeimageHead = ref("http://localhost:8081/addHeadPic?user_id=");

onMounted(async () => {
  changeimageHead.value = changeimageHead.value + store.state.user_id;
  console.log(changeimageHead.value);

  // 获取头像
  await axios
    .get(`/api/getHead?user_id=${store.state.user_id}`)
    .then((res) => {
      console.log(res);
      imageHead.value = `http://localhost:8081${res.data[0].head_pic}`;
    })
    .catch((err) => {
      console.log(err);
    });
});

const handleAvatarSuccess = async (response, uploadFile) => {
  console.log(response.originalname);
  console.log(uploadFile);
  imageUrl.value = URL.createObjectURL(uploadFile.raw);
  let fileName = `/headPic/${store.state.user_id}/${response.originalname}`;
  await axios
    .post(`/api/changeHead?head_pic=${fileName}&user_id=${store.state.user_id}`)
    .then((res) => {
      console.log(res);
      imageHead.value = "http://localhost:8081" + fileName;
    })
    .catch((err) => {
      console.log(err);
    });
};

const beforeAvatarUpload = (rawFile) => {
  //   if (rawFile.type !== "image/jpeg") {
  //     ElMessage.error("Avatar picture must be JPG format!");
  //     return false;
  //   } else if (rawFile.size / 1024 / 1024 > 2) {
  //     ElMessage.error("Avatar picture size can not exceed 2MB!");
  //     return false;
  //   }
  //   return true;
};
</script>
<style scoped>
.avatar-uploader {
  width: 60px;
  padding: 10px 16px;
  font-weight: 600;
  font-size: 14px;
  color: #1e2023;
  background-color: #edf2f5;
  border-color: #edf2f5;
  outline: 0;
  line-height: 20px;
  text-align: center;
  border-radius: 12px;
}
/* .avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
} */
.imageHead {
  width: 80px;
  height: 80px;
  overflow-clip-margin: content-box;
  overflow: clip;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  border-radius: 50%;
}
</style>
<style lang="scss">
.avatar-uploader .el-upload {
  border: 0px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>