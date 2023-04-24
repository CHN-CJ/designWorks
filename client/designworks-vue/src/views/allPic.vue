<template>
  <div class="pic">
    <div class="pic_type">
      <div class="type action" @click="changepicArray('')">全部</div>
      <div class="type" @click="changepicArray('advertisement')">广告设计</div>
      <div class="type" @click="changepicArray('poster')">海报设计</div>
      <div class="type" @click="changepicArray('illustration')">插画设计</div>
      <div class="type" @click="changepicArray('font')">字体设计</div>
      <div class="type" @click="changepicArray('ui')">UI设计</div>
      <div class="type" @click="changepicArray('other')">其他</div>
    </div>
    <div id="pic_block">
      <div class="pic_content" v-for="(item, index) in picArray" :key="index">
        <div class="box_pic">
          <img
            class="home_pic"
            :src="`http://localhost:8081/${item.works_pic_id}/${item.picName}`"
            alt=""
          />
        </div>
        <div class="pic_Message">
          <div class="pic_head">
            <img
              class="head_pic"
              :src="`http://localhost:8081${item.head_pic}`"
              alt=""
            />
            <div>{{ item.user_name }}</div>
          </div>
          <div>
            <!-- <div>{{ item.works_name }}</div> -->
            <div>{{ item.works_type }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const picArray = ref([]);
const Array = ref([1, 2, 3]);
let typeArray = ref([]);

onMounted(async () => {
  await axios
    .get("/api/getAllPic")
    .then((res) => {
      console.log(res);
      picArray.value = res.data;
      picArray.value = picArray.value.sort((a, b) => b.works_id - a.works_id);
    })
    .catch((err) => {
      console.log(err);
    });

  // console.log(picArray.value);
  typeArray = picArray.value;

  // await imgLocation("pic_block", "pic_content");

  const container = document.querySelector("#pic_block");
  const images = container.querySelectorAll("img");
  images.forEach((image) => {
    image.onload = () => {
      onLoad();
    };
  });
});

const onLoad = () => {
  //将 columnWidth column 作为响应式的，去匹配小尺寸
  const columnWidth = 240;
  const column = 5;
  const gap = 25;
  let arr = [];
  const items = document.querySelectorAll(".pic_content");
  // console.log(items);
  items.forEach((item, index) => {
    // console.log(index);
    if (index < column) {
      item.style.top = 0;
      item.style.left = `${(columnWidth + gap) * index}px`;
      // console.log((columnWidth + gap) * index);

      // console.log(parseInt(item.style.top) + item.offsetHeight);
      arr.push(parseInt(item.style.top) + item.offsetHeight);
    } else {
      let minHeight = arr[0];
      let i = 0;
      for (let j = 0; j < arr.length; j++) {
        if (minHeight > arr[j]) {
          i = j;
        }
      }
      items[index].style.top = `${arr[i] + gap / 2}px`;
      items[index].style.left = `${items[i].offsetLeft}px`;
      arr[i] = arr[i] + items[index].offsetHeight + gap / 2;
    }
  });
  const container = document.querySelector("#pic_block");
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  container.style.height = `${max}px`;
};

const changepicArray = async (type) => {
  if (type == "") {
    // 点击全部时，在重新进行一次请求
    await axios
      .get("/api/getAllPic")
      .then((res) => {
        console.log(res);
        picArray.value = res.data;
        picArray.value = picArray.value.sort((a, b) => b.works_id - a.works_id);
      })
      .catch((err) => {
        console.log(err);
      });
    typeArray = picArray.value;
  } else {
    picArray.value = typeArray;
    picArray.value = picArray.value.filter((item) => item.works_type === type);
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.pic {
  display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;

  .pic_type {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 17px;
    padding-bottom: 17px;
    min-height: 40px;

    .type {
      min-width: 74px;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      line-height: 40px;
      border-radius: 999px;
      padding-left: 10px;
      padding-right: 10px;

      &.action {
        background: #1c1f23;
        color: #f7f9fa;
      }
    }
  }

  #pic_block {
    // width: 1440px; // 默认宽度
    // margin: 20px auto; // 剧中
    // columns: 5; // 默认列数
    // column-gap: 20px; // 列间距
    position: relative;
    // width: 100%;
    width: 1320px;
    border-radius: 15px;
    margin: 0 auto;
    background-color: #fff;
    // padding: 20px;
    box-sizing: border-box;

    .pic_content {
      //   width: 100%;
      //   break-inside: avoid;
      //   margin-bottom: 30px;
      //   margin-left: 15px;
      // float: left;
      position: absolute;
      padding: 10px;

      // min-width: 189px;
      // max-width: 240px;
      .box_pic {
        width: 240px;
        // border: 1px solid #ccc;
        box-shadow: 0 0 5px #ccc;
        border-radius: 12px;
        max-height: 740px;
        overflow: hidden;

        .home_pic {
          display: block;
          // min-width: 189px;
          // max-width: 240px;
          width: 100%;
          // height: auto;
          // min-height: 160px;
        }
      }
    }

    .pic_Message {
      display: flex;
      font-size: 12px;
      // line-height: 24px;
      margin-left: 4px;
      color: rgba(30, 32, 35, 0.65);
      overflow: hidden;
      justify-content: space-between;
      align-items: center;
      padding: 5px;

      .pic_head {
        display: flex;
        align-items: center;
      }
      .head_pic {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>