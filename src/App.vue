<template>
  <div id="app">
    <img src="./assets/logo.png">
    <SyaHello/>  <!-- 也可以写成 <SyaHello></SyaHello> -->
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SyaHello from './components/SayHello'

export default {
  name: 'App',
  components: { //先在当前的组件里面注册引入的其他组件，然后才到上面的template使用
    SyaHello,  // 和下面的写法一样
    'HelloWorld':HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
