<template>
  <b-carousel
    id="multipleItems"
    v-model="slide"
    :interval="0"
    controls
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
      v-for="slideIndex in Math.ceil(sorts.length / cardsOnScreen)"
      :key="slideIndex"
    >
      <template v-slot:img>
        <b-card-group
          class="row"
        >
          <ingredient-card
            v-for="number in cardsOnThisScreen(slideIndex)"
            :key="number"
            :sort=              "sorts[calcCardIndex (slideIndex, number)]"
            :index=             "calcCardIndex (slideIndex, number)"
            :cardsOnScreen=     "cardsOnScreen"
            :ingredientGroupID= "ingredientGroupID"
          />
        </b-card-group>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import IngredientCard from './IngredientCard.vue'

export default {
  name: 'IngredientsCarousel',
  components: {
    IngredientCard
  },
  data: () => ({
    /*
    * Сколько ингридиентов должно показываться в "карусели" за раз.
    * 12 должно быть кратно этому числу. По умолчанию это 3.
    */
    cardsOnScreen: 3,
    // @TODO erase next 2 lines
    slide: 0,
    sliding: null
  }),
  props: {
    sorts: Array,
    ingredientGroupID: Number
  },
  methods: {
    // Подсчитывает индекс ингридиента в зависимости от cлайда и его номера в этом слайде
    calcCardIndex (slideIndex, number) {
      /*
      * Поскольку оба индекса начинают свой отчёт с единицы,
      * а результат должен начинаться с нуля,
      * то и отнимаем единицы от их значений.
      */
      return this.cardsOnScreen * (slideIndex - 1) + (number - 1)
    },
    /*
    * Подсчитывает сколько сортов (карточек) показывать на данном (последнем) слайде.
    * На последнем слайде может отображаться меньше карточек, чем было настроено.
    */
    cardsOnThisScreen (slideIndex) {
      const difference = this.sorts.length - (slideIndex - 1) * this.cardsOnScreen

      return Math.min(this.cardsOnScreen, difference)
    },

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
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

#multipleItems .carousel-control-prev,
#multipleItems .carousel-control-next {
  width: 5%;
}

#multipleItems .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%234e73df' width='24' height='24' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

#multipleItems .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%234e73df' width='24' height='24' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}
</style>
