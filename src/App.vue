<template>
  <div id="app">
    <router-view></router-view>
    <!-- <login-l></login-l> -->
  </div>
</template>

<script>
import loginL from '@/view/login'

export default {
  name: 'app',
  components: {loginL}
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
