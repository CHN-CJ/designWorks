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
    <div style="text-align: center; padding: 5px; width: 100vw">个人收藏</div>
    <div class="MyCollect">
      <div
        v-for="(item, index) in state.MyCollect"
        :key="index"
        class="WorksPic"
      >
        <img
          class="home_pic"
          :src="`http://localhost:8081/${item.works_pic_id}/${item.picName}`"
          alt=""
        />
        <div class="WorkName">{{ item.works_name }}</div>
        <div class="WorkDelete">取消收藏</div>
      </div>
    </div>
    <div style="text-align: center; padding: 5px; width: 100vw">个人作品</div>
    <div class="MyWorks">
      <div v-for="(item, index) in state.MyWorks" :key="index" class="WorksPic">
        <img
          class="home_pic"
          :src="`http://localhost:8081/${item.works_pic_id}/${item.picName}`"
          alt=""
        />
        <div class="WorkName">{{ item.works_name }}</div>
        <div class="WorkDelete">
          <svg
            t="1682878485302"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2664"
            width="32"
            height="32"
            @click="deleteWork(item.works_id)"
          >
            <path
              d="M202.666667 256h-42.666667a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64H266.666667v565.333333a53.333333 53.333333 0 0 0 53.333333 53.333334h384a53.333333 53.333333 0 0 0 53.333333-53.333334V352a32 32 0 0 1 64 0v469.333333c0 64.8-52.533333 117.333333-117.333333 117.333334H320c-64.8 0-117.333333-52.533333-117.333333-117.333334V256z m224-106.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z m-32 288a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z m170.666666 0a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z"
              fill="#515151"
              p-id="2665"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted, computed, reactive } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import store from "../vuex/store.js";

const imageUrl = ref("");
// const imageHead = ref("http://localhost:8081/headPic/default.png");
const imageHead = ref("");
const changeimageHead = ref("http://localhost:8081/addHeadPic?user_id=");
const state = reactive({
  MyWorks: [],
  MyCollect: [],
});

onMounted(async () => {
  console.log(store.state);
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

  //刷新页面 -- 将导航栏的头像更新。
  //或者重新加载导航栏组件

  await axios
    .get(`/api/getCollectSet?user_id=${store.state.user_id}`)
    .then((res) => {
      console.log(res);
      state.MyCollect = res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  await axios
    .get(`/api/getMyWorks?user_id=${store.state.user_id}`)
    .then((res) => {
      console.log(res);
      state.MyWorks = res.data;
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
    })
    .catch((err) => {
      console.log(err);
    });

  imageHead.value = "http://localhost:8081" + fileName;
};

const deleteWork = async (works_id) => {
  await axios
    .post(`/api/deleteWork?works_id=${works_id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  await axios
    .get(`/api/getMyWorks?user_id=${store.state.user_id}`)
    .then((res) => {
      console.log(res);
      state.MyWorks = res.data;
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

.MyCollect {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .WorksPic {
    min-width: 186px;
    // min-width: 250px;
    max-width: 250px;
    height: 240px;
    overflow: hidden;
    margin: 20px;
    border-radius: 16px;
    position: relative;

    img {
      width: 100%;
      min-height: 100%;
      height: auto;
    }

    .WorkName {
      width: 100%;
      position: absolute;
      bottom: 5px;
      text-align: center;
      background: rgba(255, 255, 255, 0.09);
      padding: 5px;
      color: #a6a5ad;
      /* padding: 10px 0px; */
      // color: #fff;
    }

    .WorkDelete {
      width: 100%;
      position: absolute;
      top: 5px;
      text-align: center;
    }
  }
}

.MyWorks {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .WorksPic {
    // width: 220px;
    // flex: 1;
    min-width: 186px;
    // min-width: 250px;
    max-width: 250px;
    height: 240px;
    overflow: hidden;
    margin: 20px;
    border-radius: 16px;
    position: relative;

    img {
      width: 100%;
      min-height: 100%;
      height: auto;
    }

    .WorkName {
      width: 100%;
      position: absolute;
      bottom: 5px;
      text-align: center;
      background: rgba(255, 255, 255, 0.09);
      padding: 5px;
      color: #a6a5ad;
      /* padding: 10px 0px; */
      // color: #fff;
    }

    .WorkDelete {
      width: 100%;
      position: absolute;
      top: 5px;
    }
  }
}
</style>