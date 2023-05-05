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
          @click="getColor(i)"
        />
      </div>
      <div
        class="watermark"
        style="width: 400px; height: 500px; display: none"
      ></div>
      <div class="QR active">
        <div class="cancel">
          <svg
            t="1683031997676"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="14057"
            width="28"
            height="28"
            @click="hideQR"
          >
            <path
              d="M1004.032007 907.639505l-395.605202-395.605201 395.605202-395.673468c12.902396-12.902396 19.967993-30.037323 19.967993-48.298651 0-18.158927-7.099731-35.259722-19.93386-48.059717A67.583977 67.583977 0 0 0 955.938156 0.000341c-18.295461 0-35.430388 7.099731-48.298651 19.967994L512.000171 415.573536 116.360836 19.968335A67.720511 67.720511 0 0 0 68.164585 0.000341C49.971525 0.000341 32.87073 7.100072 19.968335 19.968335A67.549844 67.549844 0 0 0 0.000341 68.096319c0 18.227194 7.065598 35.362122 19.967994 48.264517l395.673468 395.673468L19.968335 907.605372A67.720511 67.720511 0 0 0 0.000341 955.835756c0 18.193061 7.099731 35.327988 19.967994 48.196251 12.902396 12.868262 30.00319 19.967993 48.19625 19.967993 18.193061 0 35.327988-7.099731 48.196251-19.967993l395.673468-395.605202 395.605201 395.605202c12.868262 12.868262 30.037323 19.967993 48.230384 19.967993 18.227194 0 35.293855-7.099731 48.127984-19.93386a68.266644 68.266644 0 0 0 0-96.426635z"
              fill="#707070"
              p-id="14058"
            ></path>
          </svg>
        </div>
        <!-- qrcode 二维码 -->
        <div class="canvas">
          <canvas id="qrcode" width="200" height="200"></canvas>
        </div>
      </div>
      <div class="user_box" v-if="message.works_name != ''">
        <h3>{{ message.works_name }}</h3>
        <div v-if="true" class="user_desc">
          <div class="user_message">
            <img :src="HeadUrl" alt="" class="headpid" />
            {{ message.user_name }}
          </div>
          <p>
            {{
              message.works_write != null
                ? message.works_write
                : "这个作者很懒，啥都没写"
            }}
          </p>
        </div>
        <h4 style="margin: 5px">创作者：</h4>
        <div
          style="
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            border-bottom: 1px solid rgba(30, 32, 35, 0.1);
          "
        >
          <span
            v-for="(item, idx) in owner"
            :key="idx"
            style="
              margin: 5px;
              color: #fff;
              background-color: #000000;
              padding: 2px;
              border-radius: 4px;
            "
            >{{ item }}</span
          >
        </div>
        <div class="btn_function">
          <svg
            t="1683031387332"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10812"
            width="36"
            height="36"
            @click="showQR"
          >
            <path
              d="M942.545455 744.727273a34.909091 34.909091 0 0 0-34.909091 34.909091V907.636364h-128a34.909091 34.909091 0 1 0 0 69.818181H930.909091a46.545455 46.545455 0 0 0 46.545454-46.545454v-151.272727a34.909091 34.909091 0 0 0-34.90909-34.909091M930.909091 46.545455h-151.272727a34.909091 34.909091 0 1 0 0 69.818181H907.636364v128a34.909091 34.909091 0 1 0 69.818181 0V93.090909a46.545455 46.545455 0 0 0-46.545454-46.545454m-418.909091 186.181818c-19.2 0-34.909091 16.221091-34.909091 36.026182v486.49309c0 19.805091 15.709091 36.026182 34.909091 36.026182s34.909091-16.221091 34.909091-36.026182V268.753455c0-19.805091-15.709091-36.026182-34.909091-36.026182m430.545455 244.363636h-256c-19.2 0-34.909091 15.709091-34.909091 34.909091s15.709091 34.909091 34.909091 34.909091h256c19.2 0 34.909091-15.709091 34.90909-34.909091s-15.709091-34.909091-34.90909-34.909091M81.454545 279.272727A34.909091 34.909091 0 0 0 116.363636 244.363636V116.363636h128a34.909091 34.909091 0 1 0 0-69.818181H93.090909a46.545455 46.545455 0 0 0-46.545454 46.545454v151.272727A34.909091 34.909091 0 0 0 81.454545 279.272727m256 197.818182h-256c-19.2 0-34.909091 15.709091-34.90909 34.909091s15.709091 34.909091 34.90909 34.909091h256c19.2 0 34.909091-15.709091 34.909091-34.909091s-15.709091-34.909091-34.909091-34.909091m-93.090909 430.545455H116.363636v-128a34.909091 34.909091 0 1 0-69.818181 0V930.909091a46.545455 46.545455 0 0 0 46.545454 46.545454h151.272727a34.909091 34.909091 0 1 0 0-69.818181"
              fill="#515151"
              p-id="10813"
            ></path>
          </svg>
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

          <a href="#comment">
            <svg
              t="1683030355769"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7744"
              width="40"
              height="40"
            >
              <path
                d="M709.12 395.2384c0-44.2112-34.56-80.3584-76.8-80.3584H102.4v344.6016C102.4 703.6672 136.96 739.84 179.2 739.84h76.8v154.9312a26.0352 26.0352 0 0 0 30.08 26.4704L320 885.76h3.5072L399.36 806.4h2.944L465.92 739.84h243.2z"
                fill="#EE7C3D"
                p-id="7745"
              ></path>
              <path
                d="M839.68 184.32v473.6H430.8992l-24.192 25.3184L337.92 755.2v-97.28H184.32V184.32h655.36m5.12-81.92H179.2c-42.24 0-76.8 36.1472-76.8 80.3584v476.7232C102.4 703.6672 136.96 739.84 179.2 739.84h76.8v154.9312A26.1888 26.1888 0 0 0 281.8048 921.6a24.4992 24.4992 0 0 0 17.92-7.9104L465.92 739.84h378.88c42.24 0 76.8-36.1472 76.8-80.3328V182.7584C921.6 138.5472 887.04 102.4 844.8 102.4z"
                fill="#515151"
                p-id="7746"
                data-spm-anchor-id="a313x.7781069.0.i2"
                class="selected"
              ></path>
              <path
                d="M327.68 384a40.96 40.96 0 1 0 40.96 40.96 40.96 40.96 0 0 0-40.96-40.96zM696.32 384a40.96 40.96 0 1 0 40.96 40.96 40.96 40.96 0 0 0-40.96-40.96zM512 384a40.96 40.96 0 1 0 40.96 40.96 40.96 40.96 0 0 0-40.96-40.96z"
                fill="#333333"
                p-id="7747"
              ></path>
            </svg>
          </a>
        </div>
        <button class="download" @click="download">下载</button>
        <!-- <div
          class="bgc"
          v-for="(i, idx) in bgc"
          :key="idx"
          style="width: 120px; height: 20px"
        >
          <div></div> bgc[idx].color
        </div> -->
        <div id="imageDataOne" class="imgbgc"></div>
        <div id="imageDataTwo" class="imgbgc"></div>
        <div id="imageDataThree" class="imgbgc"></div>
      </div>
    </div>
    <!-- <comment></comment> -->
    <div class="commentParent">
      <p>
        <textarea v-model="state.commentText" placeholder="唠点啥吧"></textarea>
      </p>
      <p>
        <button @click="addComment">提交</button>
      </p>
    </div>
    <div class="showComment">
      <ul id="comment">
        <comment :data="state.commentTree" @add-reply="addReply"></comment>
      </ul>
    </div>
    <!-- <button @click="getImgData">图片数据</button> -->
    <!-- vue-qrcode 警告来源 -->
    <!-- <vue-qrcode :value="fileLink" /> -->
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

import analyze from "rgbaster";

const router = useRouter();
const route = useRoute();

const message = reactive({
  dirPic: [],
  head_pic: "",
  user_id: store.state.user_id,
  user_name: "",
  works_id: 0,
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

const QRcode = ref(true);
const HeadUrl = ref("");

const strOne = ref("");
const strTwo = ref("");

const bgc = ref([]);
const owner = ref([]);

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
      console.log(res);
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

  const download = document.querySelector(".download");
  console.log(download);
  if (message.works_mark != 0) {
    download.disabled = true;
    download.style.background = "#409EFF";
    console.log(download.disabled);
  }

  owner.value = message.works_owner.split("#");
  console.log(owner.value);

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

  // 获取水印内容
  if (message.works_mark != 0) {
    await axios
      .get(`/api/getWaterMark?waterMark_works_id=${route.params.works_id}`)
      .then((res) => {
        console.log(res.data.data);
        strOne.value = res.data.data[0].waterMark_name_one;
        strTwo.value = res.data.data[0].waterMark_name_two;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setTimeout(() => {
    render(strOne, strTwo);
  }, 200);
  // setTimeout(() => {
  //   const images = document.getElementsByClassName("img_watermark");
  //   console.log(images);
  //   let height = 0;
  //   for (let i = 0; i < images.length; i++) {
  //     height += images[i].offsetHeight;
  //     // console.log(height);
  //   }
  //   console.log(height);
  //   let width = images[0].offsetHeight;
  //   let waterMarkOut = document.getElementById("waterMarkOut");
  //   waterMarkOut.style.width = width;
  //   waterMarkOut.style.height = height;
  //   screenWidth.value = document.body.clientWidth;

  //   if (message.works_mark == 1) {
  //     // setWaterMark("qiujunwei");
  //   }
  // }, 200);

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
    .get(`/api/getHead?user_id=${message.user_id}`)
    .then((res) => {
      console.log(res);
      HeadUrl.value = `http://${store.state.netWork}:8081${res.data[0].head_pic}`;
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

// const getImgData = async () => {
//   const result = await analyze(
//     "http://172.20.10.13:8081/upload/223/223_0_62f51d42be7b86c1656d9bc5aef112834d0f73e63407c-04vH7s_fw658webp.webp"
//   );
//   console.log(result[0]);
// };

const getColor = async (url) => {
  console.log(url);
  bgc.value = [];
  // const array = [];
  const result = await analyze(
    url,
    { ignore: ["rgb(255,255,255)", "rgb(0,0,0)"] },
    { scale: 0.6 }
  );
  for (let i = 0; i < 3; i++) {
    // array.push(result[i]);
    bgc.value.push(result[i]);
  }
  // bgc.value = array;
  console.log(bgc.value);
  const bgcOne = document.getElementById("imageDataOne");
  bgcOne.style.background = `${bgc.value[0].color}`;
  const bgcTwo = document.getElementById("imageDataTwo");
  bgcTwo.style.background = `${bgc.value[1].color}`;
  const bgcThree = document.getElementById("imageDataThree");
  bgcThree.style.background = `${bgc.value[2].color}`;
};

watch(
  () => screenWidth.value,
  async (screenWidth, newscreenWidth) => {
    // console.log(screenWidth + " " + newscreenWidth);
    await render(strOne, strTwo);
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

const render = (strOne, strTwo) => {
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
    setWaterMark(strOne.value, strTwo.value);
  }
};

const download = () => {
  axios
    .get(`/api/downloadZip?work_id=${message.works_pic_id}`, {
      responseType: "blob",
    })
    .then((response) => {
      let blob = new Blob([response.data], { type: "application/zip" });
      let url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      //重命名文件
      link.download = "pic.zip";
      link.click();
      //释放内存
      URL.revokeObjectURL(url);
    })
    .catch((err) => {
      console.log(err);
    });
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

const showQR = () => {
  let QR = document.querySelector(".QR");
  // console.log(QR.style.display);
  QR.classList.remove("active");
};

const hideQR = () => {
  let QR = document.querySelector(".QR");
  // console.log(QR.style.display);
  QR.classList.add("active");
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
  font-family: Alibaba Sans, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
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
    min-width: 200px;
    max-width: 256px;
    word-break: break-all;

    h3 {
      font-size: 30px;
      line-height: 30px;
      color: #1c1f23;
      margin-bottom: 0;
      font-weight: 400;
      margin: 15px;
      text-align: center;
    }

    .user_desc {
      padding: 10px;
      border-top: 1px solid rgba(30, 32, 35, 0.1);
      border-bottom: 1px solid rgba(30, 32, 35, 0.1);
      padding: 14px 0;
      text-align: center;
      font-size: 18px;
    }

    .btn_function {
      display: flex;
      margin: 5px;
      margin-bottom: 2px;
      justify-content: space-around;

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

    .download {
      display: block;
      color: #fff;
      background: #1e80ff;
      border: 0px solid;
      margin: 2px;
      min-width: 50px;
      padding: 6px;
      text-align: center;
      // margin-left: 10px;
      border-radius: 4px;
      margin-bottom: 15px;
    }
  }
}

.QR {
  width: 280px;
  height: 280px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100000;
  border-radius: 8px;

  &.active {
    display: none;
  }

  .cancel {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    svg {
      margin: 7px;
    }
  }

  .canvas {
    width: 200px;
    height: 200px;
  }
}

.user_message {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  margin: 8px;
  margin-top: 0px;

  .headpid {
    width: 26px;
    height: 26px;
    overflow: clip;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    border-radius: 50%;
  }
}

// .bgc {
//   background-color: rgb(255, 179, 2);
// }

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

.commentParent {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: relative;

  textarea {
    // min-width: 186px;
    width: 70vw;
    border-radius: 7px;
    border-color: #c9cdc0;
    padding: 4px;
  }

  button {
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
    border: 0px;
    padding: 8px 13px;
    color: #fff;
    text-align: center;
    background-color: #00aeec;
  }
}

.showComment {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 75vw;
  padding: 5px;
  margin: 0 auto;
  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
}

.imgbgc {
  width: 100%;
  height: 40px;
  // background-color: #1e80ff;
}
</style>

