<template>
  <div class="home">
    <h3>Привязанные странички</h3>

    <b-nav vertical pills>
      <b-nav-item
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        active-class="active"
      >
        {{link.name}}
      </b-nav-item>
    </b-nav>

    <p>Это приложение создано в первую очередь для ознакомления с Vue и Bootstrap-Vue.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    links: [
      { name: 'Übersicht', url: '/' },
      { name: 'Login', url: '/login' },
      { name: 'Blank', url: '/pages/blank' }
    ]
  })
}
</script>
