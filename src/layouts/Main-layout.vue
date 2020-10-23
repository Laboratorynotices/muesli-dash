<template>
  <div id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <sidebarLayout />
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <topbarLayout />
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
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <logoutModal />
  </div>
</template>

<script>
import FooterLayout from '@/layouts/main/FooterLayout.vue'
import LogoutModal from '@/layouts/main/LogoutModal.vue'
import SidebarLayout from '@/layouts/main/SidebarLayout.vue'
import TopbarLayout from '@/layouts/main/TopbarLayout.vue'

export default {
  name: 'MainLayout',
  components: {
    FooterLayout,
    LogoutModal,
    SidebarLayout,
    TopbarLayout
  }
}
</script>
