<template lang="pug">
  div
    title-bar
</template>

<script>
import TitleBar from '@/components/TitleBar'
import {getApi} from '@/api'

export default {
  name: 'login',
  components: {
    TitleBar
  },
  data() {
    return {
    }
  },
  created() {
    getApi('post', {mobile: '13819855293', clientType: 1, type: 1})
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>