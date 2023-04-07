<template>
  <div>
    <div id="waterMarkOut">
      <img
        src="https://p26.toutiaoimg.com/origin/pgc-image/7b4277b626494837982f49868518e367?from=pc"
        alt=""
        style="display: block"
      />
    </div>
    <div style="width: 400px; height: 500px"></div>
  </div>
</template>

<script setup>
import { removeWatermark, setWaterMark } from "../common/watermark";
import { onMounted } from "vue";

onMounted(() => {
  setWaterMark("qiujunwei", "邱钧薇");
});
</script>