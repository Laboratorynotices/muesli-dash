<template>
  <div>
    kcal {{ Math.round(energy) }}
    <b-progress class="mt-2" :max="energy">
      <b-progress-bar
        :value="Math.min(greenLimit, energy)"
        variant="success"
      />
      <b-progress-bar
        v-if="energy > greenLimit"
        :value="Math.min(yellowLimit - greenLimit, energy - greenLimit)"
        variant="warning"
      />
      <b-progress-bar
        v-if="energy > yellowLimit"
        :value="energy - yellowLimit"
        variant="danger"
      />
    </b-progress>
  </div>
</template>

<script>
export default {
  data: () => ({
    greenLimit: 300,
    yellowLimit: 400
  }),
  props: {
    energy: Number
  },
  methods: {
    randomValue () {
      this.value = Math.random() * this.max
    }
  }
}
</script>
