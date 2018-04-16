<!--自己的组件-->
<template>
  <div>
    <h1>{{ banana }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banana:'i am Banana.vue',
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
