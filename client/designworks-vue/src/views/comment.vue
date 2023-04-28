<template>
  <div>
    <li v-for="item of props.data" :key="item.comment_id">
      <p>{{ item.user_name }}</p>
      <p>{{ item.comment_text }}</p>
      <a @click="setReplyFlag(item)">回复</a>
      <div v-if="item.isReply">
        <p>
          <textarea v-model="item.replyText"></textarea>
        </p>
        <p>
          <button @click="addReply(item)">提交回复</button>
        </p>
      </div>
      <div v-if="item.children" style="margin: 20px">
        <ul>
          <!--  @add-reply="addReply" 接收子组件传递过来的数据 -->
          <comment :data="item.children" @add-reply="addReply"></comment>
        </ul>
      </div>
    </li>
  </div>
</template>
<script setup>
import comment from "./comment.vue";

const props = defineProps({
  data: Array,
});

const emit = defineEmits(["addReply"]);
const setReplyFlag = (item) => {
  item.isReply = !item.isReply;
};

const addReply = (item) => {
  const replyText = item.replyText;
  emit("addReply", item, replyText);
  item.isReply = false;
  item.replyText = "";
  console.log(item, replyText);
};
</script>

<style lang="scss">
a {
  color: red;
}
</style>