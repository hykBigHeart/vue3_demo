<template>
  <div class="demo">
    <h1>我是demo子组件</h1>
    <button @click="clickBtn">子组件点击</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: ['name', 'sex'],
  emits: ['hello'],
  setup(props, context) {
    // console.log(props, context.attrs)
    console.log('context.slots', context.slots)
    function clickBtn() {
      context.emit('hello', '小明')
    }
    return {
      clickBtn
    }
  }
}
</script>

<style lang='scss' scoped>
.demo {
  background-color: aqua;
  width: 100px;
  height: 600px;
  h1 {
    color: red
  }
}
</style>