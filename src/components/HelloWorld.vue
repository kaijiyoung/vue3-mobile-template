<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="onAdd">count is: {{ count }}</button>
</template>

<script setup>
import { ref, watchEffect, inject } from 'vue'
import { userStoreHook } from '@/store'

// 定义接受的props属性
defineProps({
  msg: String
})

const homeProvide = inject('fromHome')
console.log(homeProvide, 'homeProvide inject')
// 当前组件将会使用的emits事件
const emit = defineEmits(['ok', 'cancel'])
// 动态显示的内容
const count = ref(0)
// 增加1
function onAdd() {
  userStoreHook().UPDATE_NAME('change from helloworld')

  count.value++
}
// 暴露给父级组件的方法
defineExpose({
  onAdd
})
// 初始化时执行一次，并监听使用到的响应式属性，变化时自动调用回调函数
watchEffect(() => {
  if (count.value === 2) {
    console.log('test watch2', count.value)
    emit('ok', count.value)
  }
  emit('cancel', count.value)
  console.log('test watch', count.value)
})
</script>

<style lang="less" scoped>
a {
  color: #42b983;
}
</style>
