<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import Empty from '@/layouts/Empty.vue'

export default {
  computed: {
    layout: function () {
      return (this.$route.meta.layout || 'empty')
    }
  },
  components: {
    Empty
  }
}
</script>

<style lang="scss">
// Bootstrap Vue
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
// Theme style
@import 'assets/css/sb-admin-2.css';
</style>
