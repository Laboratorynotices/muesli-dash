<template>
  <b-card
    class="shadow mb-4 my-4"
    no-body
  >
    <!-- Card Header - Dropdown -->
    <b-card-header
      class="py-3 d-flex flex-row align-items-center justify-content-between"
    >
      <h6 class="m-0 font-weight-bold text-primary">
        Müsli Werten für 100g
      </h6>
      <p v-show="false">
        {{ resultKey }}
      </p>
    </b-card-header>

    <!-- Card Body -->
    <b-card-body>
      <pie-chart
        class="chart-pie py-2"
        :chart-data="datacollection"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import PieChart from './PieChart.js'

export default {
  components: {
    PieChart
  },
  data () {
    return {
      datacollection: {}
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      console.log(this.resultListValues.fat / this.resultListValues.weight * 100)
      this.datacollection = {
        labels: ['Fett', 'Kohlenhydrate', 'Eiweiß', 'Sonstiges'],
        datasets: [{
          data: [
            this.resultListValues.fat / this.resultListValues.weight * 100,
            this.resultListValues.carbohydrates / this.resultListValues.weight * 100,
            this.resultListValues.protein / this.resultListValues.weight * 100,
            100 -
            this.resultListValues.fat / this.resultListValues.weight * 100 -
            this.resultListValues.carbohydrates / this.resultListValues.weight * 100 -
            this.resultListValues.protein / this.resultListValues.weight * 100
          ],
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#858796'],
          hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#5a5c69'],
          hoverBorderColor: 'rgba(234, 236, 244, 1)'
        }]
      }
    }
  },
  beforeUpdate () {
    this.fillData()
  },
  props: {
    resultKey: Number,
    resultListValues: {}
  }
}
</script>
