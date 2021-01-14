<template>
  <b-nav
    class="bg-gradient-primary navbar-nav sidebar sidebar-dark"
    :class="(sidebarToggled) ? 'toggled' : ''"
  >
    <!-- Sidebar - Brand -->
    <b-navbar-brand
      href="#"
      class="sidebar-brand d-flex align-items-center justify-content-center"
    >
      <b-icon
        icon="emoji-laughing"
        rotate="-15"
        class="sidebar-brand-icon"
      ></b-icon>
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
      <div v-if="menuElementsGroup.name" class="sidebar-heading">
        {{ menuElementsGroup.name }}
      </div>

      <!-- Пункты меню первого уровня -->
      <div
        v-for="(element, elementId) in menuElementsGroup.elemets"
        :key="elementId"
      >
        <!-- Nav Item - Dashboard -->
        <b-nav-item
          active-class="active"
          class="my-0"
          :class="(currentRoute == element.url || currentRoute.indexOf(element.url)==0) ? 'active' : ''"
          v-b-toggle="element.childGroups ? element.name : ''"
          :to="element.url != '' && !element.childGroups ? element.url : '#'"
          :disabled="element.url == '#'"
        >
          <b-icon :icon="element.icon"></b-icon>
          <span>{{ element.name }}</span>
          <span class="ribbon" v-if="element.childGroups">
            <b-icon v-if="!sidebarToggled" icon="chevron-right" class="when-opened"></b-icon>
            <b-icon v-if="!sidebarToggled" icon="chevron-down" class="when-closed"></b-icon>
          </span>
        </b-nav-item>

        <!-- Скрывающаяся часть -->
        <b-collapse
          :visible="currentRoute == element.url || currentRoute.indexOf(element.url)==0"
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
              <h6 class="collapse-header">{{ childGroup.name }}:</h6>
              <!-- Отображение самих пунктов меню второго уровня -->
              <router-link
                v-for="(child, childId) in childGroup.childs"
                :key="childId"
                class="collapse-item"
                :to="child.url != '' ? child.url : '#'"
                :disabled="child.url == '#'"
                active-class="active"
              >
                {{ child.name }}
              </router-link>
            </div>
          </div>
        </b-collapse>
      </div>

      <!-- Divider -->
      <hr class="sidebar-divider" />
    </div>

    <!-- Minimaze sidebar button -->
    <div class="text-center d-none d-md-inline">
      <button
        class="rounded-circle border-0"
        id="sidebarToggle"
        @click="sidebarToggled = !sidebarToggled"
      >
        <b-icon v-if="!sidebarToggled" icon="chevron-left"></b-icon>
        <b-icon v-else icon="chevron-right"></b-icon>
      </button>
    </div>
  </b-nav>
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
            url: '/pages',
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
                    url: '/pages/blank'
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
    ],
    sidebarToggled: false, // По умолчанию боковая панель не уменьшена
    currentRoute: window.location.pathname // место для хранения URL
  })
}
</script>

<style scoped>
.collapsed .when-closed,
.not-collapsed .when-opened {
  display: none;
}
</style>
