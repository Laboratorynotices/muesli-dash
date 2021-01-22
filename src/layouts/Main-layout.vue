<template>
  <div id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <sidebarLayout
        :sidebarToggleCliсked="sidebarToggleCliсked"
      />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <topbar-layout @sidebarToggle="sidebarToggle" />
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <router-view />
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footerLayout />
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <ScrollToTopButton />

    <!-- Logout Modal-->
    <logoutModal />
  </div>
</template>

<script>
import FooterLayout from '@/layouts/main/FooterLayout.vue'
import LogoutModal from '@/layouts/main/LogoutModal.vue'
import ScrollToTopButton from '@/layouts/main/ScrollToTopButton.vue'
import SidebarLayout from '@/layouts/main/SidebarLayout.vue'
import TopbarLayout from '@/layouts/main/TopbarLayout.vue'

export default {
  name: 'MainLayout',
  data: () => ({
    // Значение этой переменной не важно, главное отслеживать было ли изменено её значения.
    sidebarToggleCliсked: false
  }),
  methods: {
    // Меняем значение переменной. (Нажали на кнопку в шапке.)
    sidebarToggle () {
      this.sidebarToggleCliсked = !this.sidebarToggleCliсked
    }
  },
  components: {
    FooterLayout,
    LogoutModal,
    ScrollToTopButton,
    SidebarLayout,
    TopbarLayout
  }
/* ,
  updated () {
    console.log('updated')
  }
*/
}

</script>
