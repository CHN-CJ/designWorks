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
        <div v-if="true" class="user_desc">
          {{
            message.works_write != null
              ? message.works_write
              : "这个作者很懒，啥都没写"
          }}
        </div>
        <div class="user_detail">
          {{ message.user_name }}
        </div>
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
          <div id="collect">
            <svg
              t="1682913810082"
              class="icon collect"
              viewBox="0 0 1126 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3359"
              width="40"
              height="40"
              @click="collect"
            >
              <path
                d="M742.4 0h-358.4C199.68 0 51.2 148.48 51.2 332.8v358.4C51.2 875.52 199.68 1024 384 1024h358.4C926.72 1024 1075.2 875.52 1075.2 691.2v-358.4C1075.2 148.48 926.72 0 742.4 0zM904.533333 471.04c-3.413333 22.186667-13.653333 42.666667-29.013333 59.733333l-81.92 81.92 18.773333 114.346667c10.24 56.32-27.306667 109.226667-83.626666 119.466667-22.186667 3.413333-44.373333 0-64.853334-10.24l-102.4-54.613334L460.8 836.266667c-49.493333 27.306667-110.933333 6.826667-136.533333-42.666667-10.24-20.48-13.653333-42.666667-10.24-64.853333l18.773333-114.346667-81.92-81.92c-40.96-39.253333-40.96-105.813333-1.706667-146.773333 15.36-15.36 35.84-27.306667 58.026667-30.72l114.346667-17.066667 51.2-104.106667c25.6-51.2 85.333333-71.68 136.533333-46.08 20.48 10.24 35.84 27.306667 46.08 46.08l51.2 104.106667 114.346667 17.066667c52.906667 8.533333 92.16 59.733333 83.626666 116.053333z"
                fill="#707070"
                p-id="3360"
              ></path>
              <path
                d="M810.666667 406.186667l-119.466667-17.066667c-13.653333-1.706667-25.6-10.24-30.72-22.186667L607.573333 256c-5.12-10.24-13.653333-18.773333-22.186666-23.893333-23.893333-11.946667-54.613333-1.706667-66.56 23.893333l-52.906667 109.226667c-5.12 11.946667-17.066667 20.48-30.72 22.186666l-119.466667 17.066667c-10.24 1.706667-20.48 6.826667-29.013333 15.36-20.48 20.48-18.773333 52.906667 1.706667 73.386667l85.333333 85.333333c10.24 10.24 13.653333 22.186667 11.946667 35.84l-20.48 119.466667c-1.706667 11.946667 0 22.186667 5.12 32.426666 13.653333 25.6 42.666667 34.133333 68.266666 22.186667l105.813334-56.32c11.946667-6.826667 27.306667-6.826667 39.253333 0l105.813333 56.32c10.24 5.12 20.48 6.826667 30.72 5.12 27.306667-5.12 46.08-30.72 40.96-59.733333l-20.48-119.466667c-1.706667-13.653333 1.706667-27.306667 11.946667-35.84l85.333333-85.333333c8.533333-8.533333 13.653333-18.773333 15.36-29.013334 5.12-27.306667-13.653333-54.613333-42.666666-58.026666z"
                fill="#707070"
                p-id="3361"
              ></path>
            </svg>
          </div>
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
    <!-- vue-qrcode 警告来源 -->
    <!-- <vue-qrcode :value="fileLink" /> -->
    <canvas id="qrcode" width="200" height="200"></canvas>
  </div>
</template>


<script setup>
// 二维码的链接形式不能是localhost
// 扫二维码时，图片、头像的url也同样不能是localhost，不然显示不出来

import axios from "axios";
import { onMounted, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import store from "../vuex/store.js";
import { removeWatermark, setWaterMark } from "../common/watermark";
import comment from "./comment.vue";
import VueQrcode from "vue-qrcode";
import UQRCode from "uqrcodejs";

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
  works_write: "",
});
const state = reactive({
  commentText: "",
  commentTree: null,
});
const imageUrl = ref([]);

const screenWidth = ref(0);

// const fileLink = ref(
//   `http://192.168.43.194:8080/showFile/${route.params.works_id}`
// );

const fileLink = ref(
  `http://${store.state.netWork}:8080/showFile/${route.params.works_id}`
);

// const fileLink = ref(
//   "http://192.168.3.7:8081/upload/222/222_1_a6110ac401a1cded0ff5641b412bc3587376c9ae1cd5e1-iojVl3_fw658webp.webp"
// );

onMounted(async () => {
  console.log(route.params.works_id);
  console.log(store.state.netWork);
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
    imageUrl.value.push(
      `http://${store.state.netWork}:8081` + message.dirPic[i]
    );
  }
  console.log(imageUrl.value);

  var qr = new UQRCode();
  // 设置二维码内容
  qr.data = `http://${store.state.netWork}:8080/showFile/${route.params.works_id}`;
  // 设置二维码大小，必须与canvas设置的宽高一致
  qr.size = 200;
  // 调用制作二维码方法
  qr.make();
  // 获取canvas元素
  var canvas = document.getElementById("qrcode");
  // 获取canvas上下文
  var canvasContext = canvas.getContext("2d");
  // 设置uQRCode实例的canvas上下文
  qr.canvasContext = canvasContext;
  // 调用绘制方法将二维码图案绘制到canvas上
  qr.drawCanvas();

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
  }, 200);

  //监听页面大小发生变化
  window.onresize = () => {
    return (() => {
      screenWidth.value = document.body.clientWidth;
    })();
  };

  //判断是否在收藏表里，如果在的话，添加classs
  await axios
    .post(
      `/api/findCollect?user_id=${store.state.user_id}&works_id=${route.params.works_id}`
    )
    .then((res) => {
      console.log(res.data);
      // 如果有，res.data返回 [{collect_id: ....}]
      // 如果没有，返回 []
      if (res.data.length != 0) {
        let collectSvg = document.querySelector(".collect");
        collectSvg.classList.add("active");
      }
    })
    .catch((err) => {
      console.log(err);
    });

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

// const onDataUrlChange = () => {};

const collect = async () => {
  let collectSvg = document.querySelector(".collect");
  if (collectSvg.classList.contains("active")) {
    collectSvg.classList.remove("active");
    // 取消收藏
    await axios
      .post(
        `/api/deleteCollect?user_id=${store.state.user_id}&works_id=${route.params.works_id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    // 添加收藏
    collectSvg.classList.add("active");

    await axios
      .post(
        `/api/addCollect?user_id=${store.state.user_id}&works_id=${route.params.works_id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // const collectList = document.getElementById("collect").className;
  // if(collectList.animVal.indexOf("collect") != -1) {
  //   //有 collect 移除class
  //   //收藏表 删除
  // } else {
  // }
};

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

      svg.active path {
        fill: #f4ea2a;
      }

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

