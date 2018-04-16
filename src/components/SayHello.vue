<!--自己的组件-->
<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <p>{{ hello }}</p>
    <p>{{ number + 1 }}</p>
    <p>{{ status ? 'success' : 'fail' }}</p>

    <ul>
      <li v-for="(item,index) in items">
        {{ item.message }} - {{ index }}
      </li>
    </ul>

    <button v-on:click="greet">Greet</button>

    <!-- v-on 可以缩写为@，向父组件发送事件,父组件监听该事件然后做相关处理 -->
    <button v-on:click="emitEventToParent">emitEventToParent</button>

    <p>Computed reversed message: "{{ reversedMessage }}"</p>

    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ messagePo }}</p>

    <p>watchValue is: {{ watchValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'SayHello',
  props: ['messagePo'],  //接受父类传递的属性值，可以为数组或者对象
  data () {
    return {
      watchValue:'old',
      message: '',
      hello: 'Welcome to SayHello.vue',
      number: 4,
      status: true,
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  watch: {
    watchValue: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    }
  },
  methods: { // 在 `methods` 对象中定义方法,`this` 在方法里指向当前 Vue 实例
    greet: function () {
      alert("props message:" + this.message);
      this.watchValue = 'new';
    },
    emitEventToParent: function () {
      console.log('method emitEventToParent');
      this.$emit('parent-event',this.hello)
    }
  },
  computed: { // 计算属性
    reversedMessage: function () {
      return this.hello.split('');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
