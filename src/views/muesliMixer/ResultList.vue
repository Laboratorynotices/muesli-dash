<template>
  <b-card class="shadow" no-body>
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
        title="Linke Maustaste hinzufügen / Rechte Maustaste entfernen"
        @click="addToMuesliMix(sortID, groupID)"
        @contextmenu.prevent="removeFromMuesliMix(sortID, groupID)"
      >
        <b-col
          class="c-12"
        >
          {{ portions }}x {{ ingredients[groupID].sorts[sortID].name }}
          <b-img
            :src="'https://picsum.photos/200/100/?image=' + ingredients[groupID].sorts[sortID].imageID"
            class="float-right rounded-circle d-inline"
            style="width: 20%;"
          />
        </b-col>
      </b-row>
    </b-card-body>

    <b-card-footer
      v-if="resultListValues.weight > 0"
      class="text-primary"
    >
      <small><small>Linke Maustaste hinzufügen / Rechte Maustaste entfernen</small></small><br />
      {{ resultListValues.price | germanFloat | price }} / {{ resultListValues.weight }}g<br />
      <small>
        {{ Math.round(resultListValues.price/resultListValues.weight*100*100)/100 | germanFloat | price }} / 100g
      </small>
    </b-card-footer>
  </b-card>
</template>

<script>
// import IngredientCard from './IngredientCard.vue'
// Импортируем обменную шину
import { EventBus } from '@/eventBus/eventBus.js'

export default {
  name: 'ResultList',
  data: () => ({
  }),
  methods: {
    /**
     * Добавляем определённый ингридиент (сорт) в смесь.
     * sortID - номер сорта, который надо добавить
     * ingredientGroupID - номер группы, из которой надо добавить сорт
     */
    addToMuesliMix (sortID, ingredientGroupID) {
      // Создаю событие и прибавляю его к каналу (addToMuesliMix) с данным добавляемого сорта
      EventBus.$emit('addToMuesliMix', sortID, ingredientGroupID)
    },
    /**
     * Уменьшаем определённый ингридиент (сорт) из смеси.
     * sortID - номер сорта, который надо отнять
     * ingredientGroupID - номер группы, из которой надо отнять сорт
     */
    removeFromMuesliMix (sortID, ingredientGroupID) {
      // Создаю событие и прибавляю его к каналу (removeFromMuesliMix) с данным добавляемого сорта
      EventBus.$emit('removeFromMuesliMix', sortID, ingredientGroupID)
    },

    log (message) {
      console.log(message)
    }
  },
  props: {
    muesliMix: {},
    ingredients: Array,
    resultKey: Number,
    resultListValues: {}
  }
}
</script>
