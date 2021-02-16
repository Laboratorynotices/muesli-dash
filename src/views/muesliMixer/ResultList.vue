<template>
  <b-card no-body>
    <b-card-header>
      <h6 class="m-0 font-weight-bold text-primary">Ihre Bestellung</h6>
      <p v-show="false" >{{ resultKey }}</p>
    </b-card-header>

    <b-card-body
      v-for="(sorts, groupID) in muesliMix"
      :key="groupID"
      class="pt-0 pb-2"
    >
      <b-card-title class="h5 mt-2">{{ ingredients[groupID].name }}</b-card-title>
      <b-row
        v-for="(portions, sortID) in sorts"
        :key="sortID"
      >
        <b-col
          class="c-12"
        >
          {{ portions }}x {{ ingredients[groupID].sorts[sortID].name }}
          <b-img
            :src="'https://picsum.photos/600/300/?image=' + ingredients[groupID].sorts[sortID].imageID"
            class="float-right rounded-circle d-inline"
            style="width: 20%;"
          />
        </b-col>
      </b-row>
    </b-card-body>

    <b-card-footer
      v-if="weight > 0"
      class="text-primary"
    >
      {{ price }}€ / {{ weight }}g<br />
      <small>
        {{ Math.round(price/weight*100*100)/100 }}€ / 100g
      </small>
    </b-card-footer>
  </b-card>
</template>

<script>
// import IngredientCard from './IngredientCard.vue'

export default {
  name: 'ResultList',
  data: () => ({
    // Цена заказа в евро
    price: 0,
    // Энергическая ценность заказа в килокалориях
    energy: 0,
    // Жиры в граммах в заказе
    fat: 0,
    // Углеводы в граммах в заказе
    carbohydrates: 0,
    // Белки в граммах в заказе
    protein: 0,
    // Масса заказа
    weight: 0
  }),
  props: {
    muesliMix: {},
    ingredients: Array,
    resultKey: Number
  },
  methods: {
    /*
     * Подсчитывает пищевую ценность заказа,
     * а так же его вес и цену в евро
     */
    calculateValuesInCart () {
      this.resetValues()

      // console.log(this.muesliMix)
      for (const [groupID, sorts] of Object.entries(this.muesliMix)) {
        console.log('groupID: ' + groupID)

        for (const [sortID, portions] of Object.entries(sorts)) {
          console.log(`${sortID}: ${portions}`)
          this.price += portions * this.ingredients[groupID].sorts[sortID].price
          // Пересчитываем ценности, поскольку они данны на 100г,
          // а порции ингридиентов отличаются от этого
          this.energy +=
            portions *
            this.ingredients[groupID].sorts[sortID].energy / 100 *
            this.ingredients[groupID].sorts[sortID].weight
          this.fat +=
            portions *
            this.ingredients[groupID].sorts[sortID].fat / 100 *
            this.ingredients[groupID].sorts[sortID].weight
          this.carbohydrates +=
            portions *
            this.ingredients[groupID].sorts[sortID].carbohydrates / 100 *
            this.ingredients[groupID].sorts[sortID].weight
          this.protein +=
            portions *
            this.ingredients[groupID].sorts[sortID].protein / 100 *
            this.ingredients[groupID].sorts[sortID].weight
          this.weight += portions * this.ingredients[groupID].sorts[sortID].weight
        }
      }

      // Конкретно скрываем ошибку
      this.price = Math.round(this.price * 100) / 100
    },

    /*
     * Сбрасываем данные нашего заказа
     */
    resetValues () {
      this.price = 0
      this.energy = 0
      this.fat = 0
      this.carbohydrates = 0
      this.protein = 0
      this.weight = 0
    },

    log (message) {
      console.log(message)
    }
  },
  beforeUpdate () {
    this.calculateValuesInCart()
  }
}
</script>
