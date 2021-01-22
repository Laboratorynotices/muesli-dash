<template>
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  >

    <!-- Sidebar Toggle (Topbar) -->
    <b-button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
      @click="clicked"
      variant="none"
    ><b-icon-list shift-h="-2" shift-v="0.5" /></b-button>

    <!-- Topbar Search -->
    <topbarSearch displayIn='Topbar' />

    <!-- Topbar Navbar -->
    <topbarNavbar />

  </nav>
</template>

<script>
import TopbarNavbar from '@/layouts/main/topbar/Navbar.vue'
import TopbarSearch from '@/layouts/main/topbar/Search.vue'

export default {
  name: 'Topbar',
  components: {
    TopbarNavbar,
    TopbarSearch
  },
  methods: {
    clicked () {
      console.log('sidebarToggleCliсked')
      this.$emit('sidebarToggle')
    }
  }
  /*,
  created () {
    console.log('Top created')
  } */
}
</script>
