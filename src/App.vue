<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app">
    <img src="./assets/logo.png">
    <!--<SyaHello messagePo="hello props f." v-on:parent-event="getChildEvent"/>  &lt;!&ndash; 也可以写成 <SyaHello></SyaHello> &ndash;&gt;-->
    <!--<hello-world/>-->
    <router-view></router-view>
    <!--<router-link to="/apple">to apple</router-link>-->
    <router-link :to="{path:'/apple'}">to apple</router-link>
    <router-link to="/banana">to banana</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SyaHello from './components/SayHello'

export default {
  name: 'App',
  components: { //先在当前的组件里面注册引入的其他组件，然后才到上面的template使用
    SyaHello,  // 和下面的写法一样，还是建议使用 '-' 隔开的写法
    'hello-world':HelloWorld
  },
  methods: { // 在 `methods` 对象中定义方法,`this` 在方法里指向当前 Vue 实例
    getChildEvent: function (hello) {
      console.log('method getChildEvent' + hello);
    }
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
