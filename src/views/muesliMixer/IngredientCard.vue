<template>
  <b-card
    :title="sort.name"
    :img-src="'https://picsum.photos/600/300/?image='+sort.imageID"
    img-bottom
    tag="article"
    class="shadow mb-4 px-0"
    :class="'col-' + Math.floor(12/cardsOnScreen)"
  >
    <b-card-text>
      {{ sort.description.substring(0, sort.description.indexOf(' ', 30)) }}...
      <b-button
        href="#"
        class="p-0 align-baseline text-primary"
        v-b-modal="'modal-' + ingredientGroupID + '-' + index"
        variant="none"
      >More...</b-button>

      <b-modal
        :id="'modal-' + ingredientGroupID + '-' + index"
        :title="sort.name"
      >
        <p>{{ sort.description }}</p>
        <p>
          <span class="fs-2"> {{ sort.price | germanFloat | price }}</span>
          <span class="align-top"> / {{ sort.weight }} g</span>
        </p>
        <p>Preis pro 100 g: {{ Math.round(sort.price / sort.weight * 100 * 100) / 100 | germanFloat | price }}</p>
        <b-row class="pl-2">
          <b-col class="col-6">
            <b-row class="border-bottom">
              <b-col
                class="text-right p-1"
              >
                100g
              </b-col>
            </b-row>
            <b-row class="border-bottom">
              <b-col class="p-1">
                KiloCal.
              </b-col>
              <b-col
                class="text-right p-1"
              >
                {{ sort.energy }}kcal
              </b-col>
            </b-row>
            <b-row class="border-bottom">
              <b-col class="p-1">
                Fett
              </b-col>
              <b-col
                class="text-right p-1"
              >
                {{ sort.fat | germanFloat }}g
              </b-col>
            </b-row>
            <b-row class="border-bottom">
              <b-col class="p-1">
                Kohlenhydrate
              </b-col>
              <b-col
                class="text-right p-1"
              >
                {{ sort.carbohydrates | germanFloat }}g
              </b-col>
            </b-row>
            <b-row class="border-bottom">
              <b-col class="p-1">
                Eiweiß
              </b-col>
              <b-col
                class="text-right p-1"
              >
                {{ sort.protein | germanFloat }}g
              </b-col>
            </b-row>
          </b-col>
          <b-col class="col-6">
            <b-img
              :src="'https://picsum.photos/600/300/?image='+sort.imageID"
              class="w-100"
            />
          </b-col>
        </b-row>

        <template #modal-footer="{ hide, ok }">
          <!-- Button with custom close trigger value -->
          <b-button size="sm" variant="primary" @click="addToMuesliMix();hide()">
            Hinzufügen
          </b-button>
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success" @click="ok()">
            OK
          </b-button>
        </template>
      </b-modal>
    </b-card-text>

    <b-card-text>
      <span class="fs-2"> {{ sort.price | germanFloat | price }}</span>
      <span class="align-top"> / {{ sort.weight }} g</span>
    </b-card-text>

    <b-button
      href="#"
      variant="primary"
      @click="addToMuesliMix()"
    >Hinzufügen</b-button>
  </b-card>
</template>

<script>
// Импортируем обменную шину
import { EventBus } from '@/eventBus/eventBus.js'

export default {
  name: 'IngredientCard',
  props: {
    cardsOnScreen: Number,
    index: Number,
    sort: Object,
    ingredientGroupID: Number
  },
  methods: {
    // Добавляем ингридиент в смесь
    addToMuesliMix () {
      // Создаю событие и прибавляю его к каналу (addToMuesliMix) с данным добавляемого сорта
      EventBus.$emit('addToMuesliMix', this.index, this.ingredientGroupID)
    }
  }
}
</script>
