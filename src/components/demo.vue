<template>
  <div class="demo">
    <h1>我是demo子组件</h1>
    <button @click="clickBtn">子组件点击</button>
    <slot name="nb"></slot>
    <slot name="sb"></slot>
    <div>
      姓：<input v-model="data.firstName" type="text">
      <br>
      名：<input v-model="data.lastName" type="text">
      <br>
      全名：<span>{{data.fullName}}</span>
      <br>
      修改全名：<input v-model="data.fullName" type="text">
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue"; //  处理复杂数据类型专用

export default {
  name: 'Demo',
  props: ['name', 'sex'],
  emits: ['hello'],
  setup(props, context) {
    // console.log(props, context.attrs)
    // console.log('context', context)
    // console.log('context.slots', context.slots)
    let data = reactive({
      firstName: '张',
      lastName: '三',
    })
    // 计算属性
    // data.fullName = computed(()=> {
    //   return data.firstName + '-' + data.lastName
    // })
    data.fullName = computed({
      get() {
        return data.firstName + '-' + data.lastName
      },
      set(value) {
        let nameArr = value.split('-')
        data.firstName = nameArr[0]
        data.lastName = nameArr[1]
      }
    })
    function clickBtn() {
      context.emit('hello', '小明')
    }
    return {
      data,
      clickBtn
    }
  }
}
</script>

<style lang='scss' scoped>
.demo {
  background-color: aqua;
  width: 600px;
  height: 600px;
  h1 {
    color: red
  }
}
</style>