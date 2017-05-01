<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
  }

  body {
      line-height: 1.6;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      border: 0;
      box-sizing: border-box;
  }

  a img {
      border: 0;
  }

  a {
      text-decoration: none;
  }


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
