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
      <hr>
      <h2>求和：{{sum}}</h2>
      <button @click="sum++">增加1</button>
      <hr>
      <h2>语音播报：{{msg}}</h2>
      <button @click="msg+='!'">增加语音</button>
      <h2>工作：{{data.work}}</h2>
      <h2>年龄：{{data.age}}</h2>
      <h2>工资：{{data.job.gongzi}}K</h2>
      <button @click="data.work+='~'">工作变</button>
      <button @click="data.age++">年龄增</button>
      <button @click="data.job.gongzi++">工资加</button>
    </div>
  </div>
</template>

<script>
import {ref, computed, reactive, watch } from "vue"; //  处理复杂数据类型专用

export default {
  name: 'Demo',
  props: ['name', 'sex'],
  emits: ['hello'],
  setup(props, context) {
    // dev 分支首次提交测试
    // console.log(props, context.attrs)
    // console.log('context', context)
    // console.log('context.slots', context.slots)
    let data = reactive({
      firstName: '张',
      lastName: '三',
      work: '前端',
      age: 18,
      job: {
        gongzi: 15
      }
    })
    let sum = ref(0)
    let msg = ref('你好')
    // 计算属性
    // data.fullName = computed(()=> {
    //   return data.firstName + '-' + data.lastName
    // })
    // data.fullName = computed({
    //   get() {
    //     return data.firstName + '-' + data.lastName
    //   },
    //   set(value) {
    //     let nameArr = value.split('-')
    //     data.firstName = nameArr[0]
    //     data.lastName = nameArr[1]
    //   }
    // })

    // 情况一 监视ref定义的一个响应式数据
    // watch(sum, (newVal, oldVal)=> {
    //   console.log('sum', newVal, oldVal)
    // }, {immediate: true}) //  immediate 立即执行

    // 情况二 监视ref定义的多个响应式数据
    // watch([sum, msg], (newVal, oldVal)=> {
    //   console.log('sum或msg改变了', newVal, oldVal)
    // }, {immediate: true}) 

    // 情况三 监视reactive定义的一个响应式数据的全部属性
    // 1. 此处无法获取正确的oldVal
	  // 2. 已经强制开启了深度监听（deep配置了无效）
    // watch(data, (newVal, oldVal)=> {  
    //   console.log('监听data', newVal, oldVal)
    // }, {deep: true}) //  deep 此处配置无效

    // 情况四 监视reactive定义的一个响应式数据的某个属性
    // watch(()=> data.work, (newVal, oldVal)=> {
    //     console.log('监听data', newVal, oldVal)
    // } )

    // 情况五 监视reactive定义的一个响应式数据的某些属性
    // watch(()=> [data.work, data.age], (newVal, oldVal)=> {
    //     console.log('监听data', newVal, oldVal)
    // } )
    
    // 特殊情况 监听reactive数据里的对象，需要开启deep
    // 但是也无法正确获取oldVal
    watch(()=> data.job, (newVal, oldVal)=> {
      console.log('监听data', newVal, oldVal)
    }, {deep: true} )



    function clickBtn() {
      context.emit('hello', '小明')
    }
    return {
      data,
      sum,
      msg,
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