<template>

</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios';

onMounted(() =>{
  axios.post('http://127.0.0.1:8081/getUser',{})
  .then(res=> {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
})

onMounted(() =>{
  axios.post('/api/getUser',{})
  .then(res=> {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
})


</script>

<style lang="scss">
/*
  yarn add xxx -s
  qs 序列化
  lodash 防抖
*/


</style>

