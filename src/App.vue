<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import BlankLayout from '@/layouts/Blank-layout.vue'
import EmptyLayout from '@/layouts/Empty-layout.vue'
import MainLayout from '@/layouts/Main-layout.vue'

export default {
  computed: {
    layout: function () {
      return ((this.$route.meta.layout || 'empty') + '-layout')
    }
  },
  components: {
    EmptyLayout,
    MainLayout,
    BlankLayout
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
