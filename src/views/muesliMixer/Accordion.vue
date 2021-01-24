<template>
  <b-card no-body>
    <div class="accordion" role="tablist">
      <b-card
        no-body
        class="mb-1"
        v-for="(ingredient, index) in ingredients"
        :key="index"
      >
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            href="#"
            block
            class="p-3 px-0 d-flex flex-row align-items-center justify-content-between"
            v-b-toggle="'accordion-'+index"
            variant="primary"
          >
            <h6 class="m-0 font-weight-bold">
              {{ ingredient.name }}
              ({{ ingredient.sorts.length }} Sorts)
            </h6>

            <span>
              <b-icon-chevron-down class="when-opened" />
              <b-icon-chevron-right class="when-closed" />
            </span>
          </b-button>
        </b-card-header>
        <b-collapse
          :id="'accordion-'+index"
          accordion="my-accordion"
          role="tabpanel"
          :visible="index === 0"
        >
          <b-card-body class="p-2">
            <IngredientsCarousel
              v-if="('sorts' in ingredient && ingredient.sorts.length)"
              :sorts="ingredient.sorts"
              :ingredientGroupID = index
            />
            <b-card-text v-else>
              I start opened because <code>visible</code> is <code>true</code>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-card>
</template>

<script>
import IngredientsCarousel from './IngredientsCarousel.vue'

export default {
  name: 'MuesliAccordion',
  components: {
    IngredientsCarousel
  },
  props: {
    ingredients: Array
  }
}
</script>
