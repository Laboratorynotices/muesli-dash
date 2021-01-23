<template>
  <div class="home">
    <h3>Привязанные странички</h3>

    <b-nav vertical pills>
      <div
        v-for="(link, index) in links"
        :key="index"
      >
        <!-- Создаём ссылку из списка -->
        <b-nav-item
          v-if="'url' in link && link.url !== '#'"
          :to="link.url"
          active-class="active"
        >
          {{link.name}}
        </b-nav-item>
        <!-- Разделитель -->
        <hr v-else />
      </div>
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
      { name: 'hr' },
      { name: 'Müsli Mixer', url: '/muesli' },
      { name: 'hr' },
      { name: 'Login', url: '/login' },
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Cards', url: '/components/cards' },
      { name: 'Carousel', url: '/components/carousel' },
      { name: 'Error page 404', url: '/pages/404' },
      { name: 'Blank', url: '/pages/blank' },
      { name: 'hr' }
    ]
  })
}
</script>
