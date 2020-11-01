<template>
<div id="temp">
  <b-nav class="navbar-nav bg-gradient-primary sidebar sidebar-dark">

    <!-- Sidebar - Brand -->
    <b-navbar-brand href="#" class="sidebar-brand d-flex align-items-center justify-content-center">
      <b-icon icon="emoji-laughing" rotate="-15" class="sidebar-brand-icon"></b-icon>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </b-navbar-brand>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Перебираем все верхние группы пунктов меню. -->
    <div
      v-for="(menuElementsGroup, groupId) in menuElementsGroups"
      :key="groupId"
      class="nav-item"
    >
      <!-- Heading -->
      <!-- Необязательный заголовок -->
      <div v-if="menuElementsGroup.name" class="sidebar-heading">{{ menuElementsGroup.name }}</div>

      <!-- Пункты меню первого уровня -->
      <div
        v-for="(element, elementId) in menuElementsGroup.elemets"
        :key="elementId"
      >
        <!-- Nav Item - Dashboard -->
        <b-nav-item
          active-class="active"
          class="my-0"
          v-b-toggle="(element.childGroups) ? element.name : ''"
          :to="(element.url != '') ? element.url : '#'"
          :disabled="element.url == '#'"
        >
          <b-icon :icon="element.icon"></b-icon>
          <span>{{element.name}}</span>
        </b-nav-item>

        <!-- Скрывающаяся часть -->
        <b-collapse
          v-if="element.childGroups"
          :id="element.name"
          class="collapse show"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <!-- Пункты меню второго уровня разбиты на группы, как и пункты меню первого уровня -->
            <div
              v-for="(childGroup, childGroupId) in element.childGroups"
              :key="childGroupId"
            >
              <h6 class="collapse-header">{{childGroup.name}}:</h6>
              <!-- Отображение самих пунктов меню второго уровня -->
              <router-link
                v-for="(child, childId) in childGroup.childs"
                :key="childId"
                class="collapse-item"
                :to="(child.url != '') ? child.url : '#'"
                :disabled="child.url == '#'"
                active-class="active"
              >
                {{child.name}}
              </router-link>
            </div>
          </div>
        </b-collapse>

      </div>

      <!-- Divider -->
      <hr class="sidebar-divider" />
    </div>
  </b-nav>

  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <b-icon icon="emoji-laughing" rotate="-15" class="sidebar-brand-icon"></b-icon>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <a class="nav-link" href="index.html">
        <b-icon icon="gem"></b-icon>
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Interface</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <b-icon icon="gear-fill"></b-icon>
        <span>Components</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Custom Components:</h6>
          <a class="collapse-item" href="buttons.html">Buttons</a>
          <a class="collapse-item" href="cards.html">Cards</a>
        </div>
      </div>
    </li>

    <!-- Nav Item - Utilities Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <b-icon icon="tools"></b-icon>
        <span>Utilities</span>
      </a>
      <div
        id="collapseUtilities"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Custom Utilities:</h6>
          <a class="collapse-item" href="utilities-color.html">Colors</a>
          <a class="collapse-item" href="utilities-border.html">Borders</a>
          <a class="collapse-item" href="utilities-animation.html"
            >Animations</a
          >
          <a class="collapse-item" href="utilities-other.html">Other</a>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Addons</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item active">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <b-icon icon="folder-fill"></b-icon>
        <span>Pages</span>
      </a>
      <div
        id="collapsePages"
        class="collapse show"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Login Screens:</h6>
          <a class="collapse-item" href="login.html">Login</a>
          <a class="collapse-item" href="register.html">Register</a>
          <a class="collapse-item" href="forgot-password.html"
            >Forgot Password</a
          >
          <div class="collapse-divider"></div>
          <h6 class="collapse-header">Other Pages:</h6>
          <a class="collapse-item" href="404.html">404 Page</a>
          <a class="collapse-item active" href="blank.html">Blank Page</a>
        </div>
      </div>
    </li>

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <b-icon icon="bar-chart-line-fill"></b-icon>
        <span>Charts</span></a
      >
    </li>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <a class="nav-link" href="tables.html">
        <b-icon icon="table"></b-icon>
        <span>Tables</span></a
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle">
        <b-icon icon="chevron-left"></b-icon>
      </button>
    </div>
  </ul>
</div>
</template>

<script>
export default {
  data: () => ({
    menuElementsGroups: [
      {
        elemets: [
          {
            name: 'Dashboard',
            icon: 'gem',
            url: '#'
          }
        ]
      },
      {
        name: 'Interface',
        elemets: [
          {
            name: 'Components',
            icon: 'gear-fill',
            childGroups: [
              {
                name: 'custom components',
                childs: [
                  {
                    name: 'Buttons',
                    url: '#'
                  },
                  {
                    name: 'Cards',
                    url: '#'
                  }
                ]
              }
            ]
          },
          {
            name: 'Utilities',
            icon: 'tools',
            childGroups: [
              {
                name: 'custom Utilities',
                childs: [
                  {
                    name: 'Colors',
                    url: '#'
                  },
                  {
                    name: 'Borders',
                    url: '#'
                  },
                  {
                    name: 'Animations',
                    url: '#'
                  },
                  {
                    name: 'Other',
                    url: '#'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Addons',
        elemets: [
          {
            name: 'Pages',
            icon: 'folder-fill',
            childGroups: [
              {
                name: 'login screens:',
                childs: [
                  {
                    name: 'Login',
                    url: '#'
                  },
                  {
                    name: 'Register',
                    url: '#'
                  },
                  {
                    name: 'Forgot Password',
                    url: '#'
                  }
                ]
              },
              {
                name: 'login screens:',
                childs: [
                  {
                    name: '404 Page',
                    url: '#'
                  },
                  {
                    name: 'Blank Page',
                    url: '/blank'
                  }
                ]
              }
            ]
          },
          {
            name: 'Charts',
            icon: 'bar-chart-line-fill',
            url: '#'
          },
          {
            name: 'Tables',
            icon: 'table',
            url: '#'
          }
        ]
      }
    ]
  })
}
</script>
