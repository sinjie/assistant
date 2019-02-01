<template lang="pug">
  div.box
    span 
</template>

<script>
export default {
  name: 'titleBar',
  data() {
    return {
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
@import '@/styles/variable.scss';
.box {
  width: 100%;
  height: $title_bar_height;
  line-height: $title_bar_height;
  background: $theme_green;
}
</style>