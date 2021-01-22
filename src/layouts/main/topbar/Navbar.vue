<template>
  <b-navbar-nav class="ml-auto">
    <!-- b-nav-form>
      <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form -->

    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
    <b-nav-item-dropdown
      menu-class="shadow dropdown-list p-3"
      class="d-sm-none"
      no-caret>
      <template #button-content>
        <b-icon-search />
      </template>
      <li>
        <!-- Dropdown - Alerts -->
        <topbarSearch displayIn='Navbar' />
      </li>
    </b-nav-item-dropdown>

    <!-- Nav Item - Alerts -->
    <b-nav-item-dropdown
      menu-class="shadow dropdown-list"
      class="mx-1"
      right
      no-caret>
      <template #button-content>
        <b-icon-bell-fill />
        <!-- Counter - Alerts -->
        <span class="badge badge-danger badge-counter">3+</span>
      </template>
      <!-- Dropdown - Alerts -->
      <h6 class="dropdown-header">Alerts Center</h6>
      <b-dropdown-item
        href="#"
        link-class="d-flex align-items-center"
      >
        <div class="mr-3">
          <div class="icon-circle bg-primary text-white">
            <b-icon-file-earmark-text-fill />
          </div>
        </div>
        <div>
          <div class="small text-gray-500">December 12, 2019</div>
          <span class="font-weight-bold">
            A new monthly report is ready to download!
          </span>
        </div>
      </b-dropdown-item>
      <b-dropdown-item
        href="#"
        link-class="d-flex align-items-center"
      >
        <div class="mr-3">
          <div class="icon-circle bg-success text-white">
            <b-icon-wallet-fill />
          </div>
        </div>
        <div>
          <div class="small text-gray-500">December 7, 2019</div>
          $290.29 has been deposited into your account!
        </div>
      </b-dropdown-item>
      <b-dropdown-item
        href="#"
        link-class="d-flex align-items-center"
      >
        <div class="mr-3">
          <div class="icon-circle bg-warning text-white">
            <b-icon-exclamation-triangle-fill />
          </div>
        </div>
        <div>
          <div class="small text-gray-500">December 2, 2019</div>
          Spending Alert: We've noticed unusually high spending
          for your account.
        </div>
      </b-dropdown-item>
      <b-dropdown-item href="#" link-class="text-center small text-gray-500">
        Show All Alerts
      </b-dropdown-item>
    </b-nav-item-dropdown>

    <!-- Nav Item - Messages -->
    <b-nav-item-dropdown
      menu-class="shadow dropdown-list"
      class="mx-1"
      right
      no-caret>
      <template #button-content>
        <b-icon-envelope-fill />
        <!-- Counter - Messages -->
        <span class="badge badge-danger badge-counter">7</span>
      </template>
      <!-- Dropdown - Messages -->
      <h6 class="dropdown-header">Message Center</h6>
      <b-dropdown-item href="#" link-class="d-flex align-items-center">
        <div class="dropdown-list-image mr-3">
          <img
            class="rounded-circle"
            src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
            alt=""
          />
          <div class="status-indicator bg-success"></div>
        </div>
        <div class="font-weight-bold">
          <div class="text-truncate">
            Hi there! I am wondering if you can help me with a problem I've been having.
          </div>
          <div class="small text-gray-500">Emily Fowler · 58m</div>
        </div>
      </b-dropdown-item>
      <b-dropdown-item href="#" link-class="d-flex align-items-center">
        <div class="dropdown-list-image mr-3">
          <img
            class="rounded-circle"
            src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
            alt=""
          />
          <div class="status-indicator"></div>
        </div>
        <div>
          <div class="text-truncate">
            I have the photos that you ordered last month, how would you
            like them sent to you?
          </div>
          <div class="small text-gray-500">Jae Chun · 1d</div>
        </div>
      </b-dropdown-item>
      <b-dropdown-item href="#" link-class="d-flex align-items-center">
        <div class="dropdown-list-image mr-3">
          <img
            class="rounded-circle"
            src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
            alt=""
          />
          <div class="status-indicator bg-warning"></div>
        </div>
        <div>
          <div class="text-truncate">
            Last month's report looks great, I am very happy with the
            progress so far, keep up the good work!
          </div>
          <div class="small text-gray-500">Morgan Alvarez · 2d</div>
        </div>
      </b-dropdown-item>
      <b-dropdown-item href="#" link-class="d-flex align-items-center">
        <div class="dropdown-list-image mr-3">
          <img
            class="rounded-circle"
            src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
            alt=""
          />
          <div class="status-indicator bg-success"></div>
        </div>
        <div>
          <div class="text-truncate">
            Am I a good boy? The reason I ask is because someone told me
            that people say this to all dogs, even if they aren't good...
          </div>
          <div class="small text-gray-500">Chicken the Dog · 2w</div>
        </div>
      </b-dropdown-item>
      <b-dropdown-item href="#" link-class="text-center small text-gray-500">
        Read More Messages
      </b-dropdown-item>
    </b-nav-item-dropdown>

    <div class="topbar-divider d-none d-sm-block"></div>

    <!-- Nav Item - User Information -->
    <b-nav-item-dropdown
      menu-class="shadow"
      right
      no-caret>
      <!-- Using 'button-content' slot -->
      <template #button-content>
        <span class="mr-2 d-none d-lg-inline text-gray-600 small"
          >Valerie Luna</span>
          <img
            class="img-profile rounded-circle"
            src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
          />
      </template>
      <!-- Dropdown - User Information -->
      <b-dropdown-item href="#">
        <b-icon-person-fill class="mr-2 text-gray-400" />
        Profile
      </b-dropdown-item>
      <b-dropdown-item href="#">
        <b-icon-gear class="mr-2 text-gray-400" />
        Settings
      </b-dropdown-item>
      <b-dropdown-item href="#">
        <b-icon-list-ul class="mr-2 text-gray-400" />
        Activity Log
      </b-dropdown-item>
      <div class="dropdown-divider"></div>
      <b-dropdown-item href="#">
        <b-icon-box-arrow-right class="mr-2 text-gray-400" />
        Logout
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
import TopbarSearch from '@/layouts/main/topbar/Search.vue'

export default {
  name: 'Navbar',
  components: {
    TopbarSearch
  }
}
</script>
