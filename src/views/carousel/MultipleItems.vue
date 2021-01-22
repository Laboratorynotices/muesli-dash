<template>
  <div>
    <b-carousel
      id="multipleItems"
      v-model="slide"
      :interval="400000"
      controls
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <b-card-group>
            <b-card img-src="https://picsum.photos/256/100/?image=50" overlay>
              <b-card-header>Header Nr.1</b-card-header>
              <b-card-text>Some short text...</b-card-text>
            </b-card>
            <b-card img-src="https://picsum.photos/256/100/?image=51" overlay>
              <b-card-header>Header Nr.2</b-card-header>
              <b-card-text>Some short text...</b-card-text>
            </b-card>
            <b-card img-src="https://picsum.photos/256/100/?image=53" overlay>
              <b-card-header>Header Nr.3</b-card-header>
              <b-card-text>Some short text...</b-card-text>
            </b-card>
          </b-card-group>
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <b-card-group>
            <b-card img-src="https://picsum.photos/256/100/?image=54" overlay>
              <b-card-header>Header Nr.4</b-card-header>
              <b-card-text>Some short text...</b-card-text>
            </b-card>
            <b-card img-src="https://picsum.photos/256/100/?image=55" overlay>
              <b-card-header>Header Nr.5</b-card-header>
              <b-card-text>Some short text...</b-card-text>
            </b-card>
            <b-card img-src="https://picsum.photos/256/100/?image=56" overlay>
              <b-card-header>Header Nr.6</b-card-header>
              <b-card-text>Some short text...</b-card-text>
            </b-card>
          </b-card-group>
        </template>
      </b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    slide: 0,
    sliding: null
  }),
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
#multipleItems .carousel-inner {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

#multipleItems .carousel-control-prev,
#multipleItems .carousel-control-next {
  width: 10%;
}

#multipleItems .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%234e73df' width='24' height='24' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

#multipleItems .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%234e73df' width='24' height='24' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}
</style>
