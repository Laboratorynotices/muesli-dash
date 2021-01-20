<template>
  <b-card
    class="shadow mb-4"
    no-body
  >
    <b-card-header class="py-3">
      <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
    </b-card-header>
    <b-card-body>
      <div
        v-for="(progressBar, key) in progressBars"
        :key="key"
      >
        <h4
          class="small font-weight-bold"
        >
          {{ progressBar.lable }}
          <span
            class="float-right"
            v-if="maxValue <= progressBar.value"
          >
            Complete!
          </span>
          <span
            v-else
            class="float-right"
          >
            {{ progressBar.value }}%
          </span>
        </h4>
        <b-progress
          :max="maxValue"
          :min="minValue"
          :class="(key + 1 < progressBars.length) ? 'mb-4' : ''"
        >
          <b-progress-bar
            :class="progressBar.class"
            :value="progressBar.value"
          />
        </b-progress>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  data: () => ({
    maxValue: 100,
    minValue: 0,
    progressBars: [
      {
        class: 'bg-danger',
        lable: 'Server Migration',
        value: 20
      },
      {
        class: 'bg-warning',
        lable: 'Sales Tracking',
        value: 40
      },
      {
        class: '',
        lable: 'Customer Database',
        value: 60
      },
      {
        class: 'bg-info',
        lable: 'Payout Details',
        value: 80
      },
      {
        class: 'bg-success',
        lable: 'Account Setup',
        value: 100
      }
    ]
  })
}

</script>
