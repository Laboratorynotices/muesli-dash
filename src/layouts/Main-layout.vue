<template>
  <div id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <sidebarLayout
        :sidebarToggleCliсked="sidebarToggleCliсked"
        :key="menuKey"
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
    sidebarToggleCliсked: false,
    // Оригинальный URL
    oldRoute: '', // window.location.pathname,
    // Ключ для обновления SidebarLayout (меню)
    menuKey: 0
  }),
  methods: {
    // Меняем значение переменной. (Нажали на кнопку в шапке.)
    sidebarToggle () {
      this.sidebarToggleCliсked = !this.sidebarToggleCliсked
    },
    // Получаем URL-страницы
    getURL () {
      return this.$route.path
    }
  },
  components: {
    FooterLayout,
    LogoutModal,
    ScrollToTopButton,
    SidebarLayout,
    TopbarLayout
  },
  created () {
    // Запоминаем первоначальный URL-адрес
    this.oldRoute = this.getURL()
  },
  updated () {
    // место для хранения нового URL
    const currentRoute = this.getURL()

    console.log('oldRoute: ' + this.oldRoute)
    console.log('currentRoute: ' + currentRoute)

    if (this.oldRoute !== currentRoute) {
      this.oldRoute = currentRoute
      this.menuKey += 1
    }
  }
}

</script>
