<template>
<h1>此项目是用于学习vue3</h1>
<div>姓名：{{name}}</div>
<div>性别：{{sex}}</div>
<div>职业：{{job.type}}</div>
<div>薪资：{{job.money}}</div>
<div>爱好：{{hobby}}</div>
<button @click="change">按钮</button>
<demo @hello='changeHello' sex="男" name='斯蒂芬'/>
</template>

<script>
import { h } from "vue";
import { ref } from "vue";  //  响应式函数，ref 加工的数据官方称“引用实现对象”。 “引用对象”里面封装的有get()、set()方法，读取数据调用get()、赋值数据调用set()
// 1. 基本数据类型RefImpl{} (用的还是Object.defineProperty()的get()、set()); 
// 2. 复杂数据类型Proxy{} (用的是ES6中的Proxy方法，但是vue3对这个方法进行了一个封装，封装为reactive函数)

import { reactive } from "vue"; //  处理复杂数据类型专用

import demo from './components/demo.vue'


export default {
  name: "App",
  components: {demo},
  setup() {
    // 定义数据
    let name = reactive('张三');
    let sex = '男';
    let job = reactive({
      type: '前端',
      money: '10k'
    })
    let hobby = reactive(['一哭', '二闹', '三上吊'])
// debugger
    function change() {
      // debugger
      name = '零四';
      sex = '女';
      job.type = '乞丐';
      hobby[0] = '起飞';

      // vue3.0响应式原理
      // new Proxy(data, {
      //   // 拦截读取值
      //   get(target, prop) {
      //     return Reflect.get(target, prop)
      //   },
      //   // 拦截设置属性值或添加新属性
      //   set(target, prop, value) {
      //     return Reflect.set(target, prop, value)
      //   },
      //   // 拦截删除属性
      //   deleteProperty(target, prop) {
      //     return Reflect.defineProperty(target, prop)
      //   },
      // })
      

        
    }
    function changeHello(value) {
      alert(`hello！！${value}`)
    }
    return {
      name,
      sex,
      job,
      hobby,
      change,
      changeHello
    }
    // 还可以返回个渲染函数 👇  直接以渲染函数为准
    // return () => h('h1', 'NB')
  }
 
}
</script>

<style>

</style>
