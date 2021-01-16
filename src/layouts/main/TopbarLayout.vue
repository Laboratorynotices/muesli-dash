<template>
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  >
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
      v-on:click="sidebarToggleTopCliked"
    ><b-icon-list shift-h="-2" shift-v="0.5" /></button>

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
    sidebarToggleTopCliked () {
      this.$emit('sidebarToggleTopCliked')
    }
  }
}
</script>
