<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Carousel</h1>

    <!-- Default carousel from the page https://bootstrap-vue.org/docs/components/carousel -->
    <b-row class="mb-4">
      <b-col>
        <b-card>
          <b-card-header>
            <h2>DefaultCarousel</h2>
          </b-card-header>
          <DefaultCarousel />
        </b-card>
      </b-col>
    </b-row>

    <!-- Multiple Items Carousel -->
    <b-row class="mb-4">
      <b-col>
        <b-card>
          <b-card-header>
            <h2>Multiple Items Carousel Simulation</h2>
          </b-card-header>
          <MICarousel />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DefaultCarousel from '@/views/carousel/DefaultCarousel.vue'
import MICarousel from '@/views/carousel/MultipleItems.vue'

export default {
  name: 'Carousel',
  components: {
    DefaultCarousel,
    MICarousel
  }
  /*,
  methods: {
    clicked () {
      console.log('sidebarToggleCliсked')
      this.$emit('sidebarToggle')
    }
  } */
  /*,
  created () {
    console.log('Top created')
  } */
}
</script>
