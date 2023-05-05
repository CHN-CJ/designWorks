<template>
  <div>
    <li v-for="item of props.data" :key="item.comment_id">
      <p class="userName">{{ item.user_name }}</p>
      <p class="comment_text">{{ item.comment_text }}</p>
      <a @click="setReplyFlag(item)">回复</a>
      <div v-if="item.isReply" class="reply">
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
li {
  color: #61666d;

  .userName {
    font-size: 13px;
    font-weight: 500;
  }

  .comment_text {
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    color: #18191c;
  }

  a {
    color: #9499a0;
  }

  .reply {
    display: flex;
    align-items: center;
    textarea {
      // min-width: 186px;
      width: 100%;
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

  ul {
    list-style: none;
  }
}
</style>