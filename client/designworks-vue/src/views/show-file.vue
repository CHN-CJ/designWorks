<template>
  <!-- <img src="../../../../server/upload/1/wje.jpg" alt="" /> -->
  <!-- <img
      src="../../../../server/upload/1/e6a085570e5620ee2946262e73d0f6cd3bb75ea73e4493-24EBgE_fw658webp.webp"
      alt=""
    /> -->
  <div>
    <div class="content_box">
      <div class="img_box" id="waterMarkOut">
        <img
          class="img_watermark"
          :src="i"
          alt=""
          v-for="(i, idx) in imageUrl"
          :key="idx"
          style="display: block"
        />
      </div>
      <div
        class="watermark"
        style="width: 400px; height: 500px; display: none"
      ></div>
      <div class="user_box" v-if="message.works_name != ''">
        <h3>{{ message.works_name }}</h3>
        <div v-if="true" class="user_desc"></div>
        <div class="user_detail">用户信息</div>
        <div class="btn_function">
          <button>
            <!-- <svg
              t="1681291190064"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2629"
              width="20"
              height="20"
            >
              <path
                d="M797.184 518.496l-284.384 294.016-284.16-292A162.752 162.752 0 0 1 192 417.6C192 328.512 263.808 256 352 256a159.36 159.36 0 0 1 133.28 72.16L512 368.64l26.72-40.48A159.488 159.488 0 0 1 672 256c88.224 0 160 72.512 160 161.6 0 37.536-12.992 74.08-34.816 100.896M672 192a222.72 222.72 0 0 0-160 67.712A222.624 222.624 0 0 0 352 192c-123.52 0-224 101.216-224 225.6 0 52.288 18.176 103.232 52.96 145.536l285.952 293.984a62.4 62.4 0 0 0 45.088 19.168c17.12 0 33.12-6.816 45.12-19.136l287.744-296.064A226.816 226.816 0 0 0 896 417.6C896 293.216 795.52 192 672 192"
                fill="#3E3A39"
                p-id="2630"
              ></path>
            </svg> -->
            <svg
              t="1681273026730"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1469"
              width="20"
              height="20"
            >
              <path
                class="path_color"
                d="M672 192a222.72 222.72 0 0 0-160 67.68A222.592 222.592 0 0 0 352 192c-123.52 0-224 101.184-224 225.6 0 52.256 18.144 103.2 52.928 145.536l285.952 293.984a62.528 62.528 0 0 0 90.208 0l287.808-296.032A227.136 227.136 0 0 0 896 417.6C896 293.184 795.52 192 672 192"
                fill-opacity=".2"
                p-id="1470"
                color="black"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              t="1681214241285"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5539"
              width="15"
              height="15"
            >
              <path
                d="M720.398507 959.573333c73.045333 31.317333 136.96-15.317333 129.706666-94.293333l-20.650666-226.218667 174.634666-199.722666c38.144-43.648 19.2-102.229333-37.418666-115.114667l-258.474667-58.794667-135.68-228.010666c-29.738667-49.877333-91.306667-49.92-121.045333 0L315.74784 265.429333 57.273173 324.224C0.953173 337.066667-18.33216 395.648 19.854507 439.338667l174.634666 199.722666-24.021333 264.405334c-5.248 57.770667 44.544 94.037333 97.877333 71.125333l243.626667-104.533333 208.426667 89.472z"
                fill="#e6e6e6"
                p-id="5540"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              t="1681214202535"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4572"
              width="15"
              height="15"
            >
              <path
                d="M853.333333 768c35.413333 0 64-20.650667 64-55.978667V170.581333A63.978667 63.978667 0 0 0 853.333333 106.666667H170.666667C135.253333 106.666667 106.666667 135.253333 106.666667 170.581333v541.44C106.666667 747.285333 135.338667 768 170.666667 768h201.173333l110.016 117.44a42.752 42.752 0 0 0 60.586667 0.042667L651.904 768H853.333333z m-219.029333-42.666667h-6.250667l-115.797333 129.962667c-0.106667 0.106667-116.010667-129.962667-116.010667-129.962667H170.666667c-11.776 0-21.333333-1.621333-21.333334-13.312V170.581333A21.205333 21.205333 0 0 1 170.666667 149.333333h682.666666c11.776 0 21.333333 9.536 21.333334 21.248v541.44c0 11.754667-9.472 13.312-21.333334 13.312H634.304zM341.333333 490.666667a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m170.666667 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m170.666667 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z"
                fill="#3D3D3D"
                p-id="4573"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- <comment></comment> -->
    <div>
      <p>
        <textarea v-model="state.commentText"></textarea>
      </p>
      <p>
        <button @click="addComment">提交评论</button>
      </p>
    </div>
    <div>
      <ul>
        <comment :data="state.commentTree" @add-reply="addReply"></comment>
      </ul>
    </div>
  </div>
</template>


<script setup>
import axios from "axios";
import { onMounted, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import store from "../vuex/store.js";
import { removeWatermark, setWaterMark } from "../common/watermark";
import comment from "./comment.vue";

const router = useRouter();
const route = useRoute();

const message = reactive({
  dirPic: [],
  head_pic: "",
  user_id: store.state.user_id,
  user_name: "",
  works_date: "",
  works_mark: 0,
  works_name: "",
  works_owner: "",
  works_pic_id: 0,
  works_type: "",
  works_view: 0,
  works_writer: "",
});
const state = reactive({
  commentText: "",
  commentTree: null,
});
const imageUrl = ref([]);

const screenWidth = ref(0);

onMounted(async () => {
  console.log(route.params.works_id);
  await axios
    .get(`/api/getWork?works_id=${route.params.works_id}`)
    .then((res) => {
      // console.log(res);
      for (let key in res.data[0]) {
        message[key] = res.data[0][key]; // foo, bar
        // console.log(res.data[0][key]);
      }
      // console.log(message);
    })
    .catch((err) => {
      console.log(err);
    });

  for (let i = 0; i < message.dirPic.length; i++) {
    imageUrl.value.push("http://localhost:8081" + message.dirPic[i]);
  }
  console.log(imageUrl.value);

  setTimeout(() => {
    const images = document.getElementsByClassName("img_watermark");
    console.log(images);
    let height = 0;
    for (let i = 0; i < images.length; i++) {
      height += images[i].offsetHeight;
      // console.log(height);
    }
    console.log(height);
    let width = images[0].offsetHeight;
    let waterMarkOut = document.getElementById("waterMarkOut");
    waterMarkOut.style.width = width;
    waterMarkOut.style.height = height;
    screenWidth.value = document.body.clientWidth;

    if (message.works_mark == 1) {
      setWaterMark("qiujunwei", "王嘉尔");
    }
  }, 500);

  //监听页面大小发生变化
  window.onresize = () => {
    return (() => {
      screenWidth.value = document.body.clientWidth;
    })();
  };

  await axios
    .get(`/api/getCommentSet?works_id=${route.params.works_id}`)
    .then((res) => {
      // console.log(res);
      // for (let key in res.data[0]) {
      //   message[key] = res.data[0][key]; // foo, bar
      //   console.log(res.data[0][key]);
      // }
      // console.log(message);
      state.commentTree = formatTree(res.data);
      console.log(state.commentTree);
    })
    .catch((err) => {
      console.log(err);
    });
});

watch(
  () => screenWidth.value,
  async (screenWidth, newscreenWidth) => {
    // console.log(screenWidth + " " + newscreenWidth);
    await render();
  }
);

const render = () => {
  const images = document.getElementsByClassName("img_watermark");
  console.log(images);
  let height = 0;
  for (let i = 0; i < images.length; i++) {
    height += images[i].offsetHeight;
    // console.log(height);
  }
  console.log(height);
  let width = images[0].offsetWeight;
  let waterMarkOut = document.getElementById("waterMarkOut");
  waterMarkOut.style.width = width;
  waterMarkOut.style.height = height;

  if (message.works_mark == 1) {
    setWaterMark("qiujunwei", "王嘉尔");
  }
};

const addComment = async () => {
  //往评论表中添加评论
  await axios
    .post("/api/addComment", {
      comment_user_id: store.state.user_id,
      comment_text: state.commentText,
      comment_work_id: route.params.works_id,
      comment_pid: 0,
      comment_date: getTime(),
      comment_like_num: 0,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  //将自己刚刚评论的放在最前面
  //这里返回值可以拿到comment_id,这样可以将这条信息放在最前面

  state.commentText = "";
  //添加完后如何渲染？
  //重新请求一遍？
  await axios
    .get(`/api/getCommentSet?works_id=${route.params.works_id}`)
    .then((res) => {
      state.commentTree = formatTree(res.data);
      // state.commentTree = formatTree(state.commentTree);
      console.log(state.commentTree);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addReply = async (item, replyText) => {
  await axios
    .post("/api/addComment", {
      comment_user_id: store.state.user_id,
      comment_text: replyText,
      comment_work_id: route.params.works_id,
      comment_pid: item.comment_id,
      comment_date: getTime(),
      comment_like_num: 0,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  await axios
    .get(`/api/getCommentSet?works_id=${route.params.works_id}`)
    .then((res) => {
      state.commentTree = formatTree(res.data);
      console.log(state.commentTree);
    })
    .catch((err) => {
      console.log(err);
    });
};

function formatTree(data) {
  const result = [];
  const map = [];

  data.forEach((item) => {
    map[item.comment_id] = item;
  });

  data.forEach((item) => {
    const parent = map[item.comment_pid];
    if (parent) {
      (parent.children || (parent.children = [])).unshift(item);
    } else {
      result.unshift(item);
    }
  });

  return result;
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

* {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

.content_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  // height: 100vh;
  // align-items: center;

  .img_box {
    display: flex;
    flex-direction: column;
    padding: 16px;

    img {
      width: 40vw;
      min-width: 300px;
      max-width: 100%;
      max-height: 100%;
      border-radius: 12px;
      margin-bottom: 10px;
      // position: relative;
      // width: 100%;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .user_box {
    display: flex;
    flex-direction: column;
    padding: 15px;

    h3 {
      font-size: 20px;
      line-height: 30px;
      color: #1c1f23;
      margin-bottom: 0;
      font-weight: 400;
    }

    .user_desc {
      padding: 10px;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
    }

    .btn_function {
      display: flex;
      margin: 5px;

      button {
        width: 40px;
        height: 40px;
        padding: 0;
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #1c1f23;
        background-color: #fff;
        border-color: rgba(30, 32, 35, 0.1);
        border-radius: 6px;
        margin-right: 5px;

        &:last-child {
          margin-right: 0px;
        }

        path:hover {
          // fill: rgb(255, 89, 103);
          // background-color: rgb(255, 89, 103);
          // overflow: hidden;
          // fill-opacity: 1;
          color: #ff5967;
        }
      }
    }
  }
}

/*
<svg t="1681271100939" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4048" width="200" height="200"><path d="M780.8 204.8c-83.2-44.8-179.2-19.2-243.2 44.8L512 275.2 486.4 249.6c-64-64-166.4-83.2-243.2-44.8C108.8 275.2 89.6 441.6 185.6 537.6l32 32 153.6 153.6 102.4 102.4c25.6 25.6 57.6 25.6 83.2 0l102.4-102.4 153.6-153.6 32-32C934.4 441.6 915.2 275.2 780.8 204.8z" fill="#d81e06" p-id="4049"></path></svg>
*/
// .icon::after {
//   // display: block;
//   display: inline;
//   content: "";
//   width: 50px;
//   height: 50px;
//   border: 1px solid gray;
//   background-color: aqua;
//   border-radius: 6px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1000;
// }
</style>

