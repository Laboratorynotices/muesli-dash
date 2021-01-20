<template>
  <div class="col-xl-3 col-md-6 mb-4">
    <b-card
      :class="'border-left-'+variant"
      class="shadow h-100 py-2"
    >
      <div class="row no-gutters align-items-center">
        <b-col class="mr-2">
          <div
            :class="'text-'+variant"
            class="text-xs font-weight-bold text-uppercase mb-1"
          >
            {{ lineFirst }}
          </div>
          <!-- Standard output, just text -->
          <div
            class="h5 mb-0 font-weight-bold text-gray-800"
            v-if="!progressbar"
          >
            {{ lineSecond }}
          </div>
          <!-- Output width progressbar -->
          <div
            class="row no-gutters align-items-center"
            v-else
          >
            <div class="col-auto">
              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                {{ progressbar }}%
              </div>
            </div>
            <div class="col">
              <b-progress
                :max="100"
                :min="0"
                class="progress-sm mr-2"
              >
                <b-progress-bar
                  class="bg-info"
                  :value="progressbar"
                />
              </b-progress>
            </div>
          </div>
        </b-col>
        <b-col class="col-auto">
          <b-icon :icon="icon" class="text-gray-300" font-scale="2" />
        </b-col>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ContentRowCard',
  data: () => ({//    variant: 'primary'
  }),
  props: {
    icon: String,
    lineFirst: String,
    lineSecond: String,
    progressbar: Number,
    variant: String
  }
}
</script>
