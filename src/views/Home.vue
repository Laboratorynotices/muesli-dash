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
    <p>
      <b-link
        href="https://github.com/Laboratorynotices/muesli-dash"
        target="_blank">
        Ссылка на код в GitHub.
      </b-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    links: [
      { name: 'Overview', url: '/' },
      { name: 'Login', url: '/login' },
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Error page 404', url: '/pages/404' },
      { name: 'Blank', url: '/pages/blank' }
    ]
  })
}
</script>
