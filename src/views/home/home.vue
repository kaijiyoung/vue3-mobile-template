<template>
  <h1>{{ msg }}</h1>
  <p>store-user:{{ username }}</p>
  <van-button type="primary" @click="show = true">选择多个日期</van-button>
  <p>{{text}}</p>
  <van-calendar v-model:show="show" type="multiple" @confirm="onConfirm" />
  <HelloWorld ref="helloRef" msg="props msg" @ok="helloOk" @cancel="helloCancel"/>
  <div class="test-less">测试less</div>
</template>
<script setup>
import HelloWorld from '../../components/HelloWorld'
import { ref, computed, onMounted, provide } from 'vue'
import { Toast } from 'vant'
import { userStoreHook } from '@/store'

const msg = 'hello home page'
const text = ref('')
const show = ref(false)
const username = computed(() => userStoreHook().name)
const helloRef = ref()

// 日期选择事件回调
function onConfirm(dates) {
  userStoreHook().UPDATE_NAME('change from home')
  Toast({
    message: '自定义图片',
    icon: 'https://cdn.jsdelivr.net/npm/@vant/assets/logo.png',
  })
  show.value = false
  text.value = `选择了 ${dates.length} 个日期`
}
// 广播一个对象到子孙组件
provide('fromHome', {
  home: 'home'
})

// 子组件emit事件回调
function helloOk(val) {
  console.log('接收ok', val)
}

// 子组件emit事件回调
function helloCancel(val) {
  console.log('接收cancel', val)
}
// 生命周期钩子
onMounted(() => {
  console.log('mounted')
})
</script>
<style lang="less" scoped></style>
