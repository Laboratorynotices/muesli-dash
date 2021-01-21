<template>
  <div
    id="dashboard"
    class="container-fluid"
  >
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <b-icon-download class="text-white-50" />
        Generate Report
      </a>
    </div>

    <!-- Content Row -->
    <b-row>
      <contentRowCard
        v-for="(contentRowCard, id) in contentRowCards"
        :key="id"
        :icon="contentRowCard.icon"
        :lineFirst="contentRowCard.lineFirst"
        :lineSecond="contentRowCard.lineSecond"
        :progressbar="contentRowCard.progressbar"
        :variant = "contentRowCard.variant"
      />
    </b-row>

    <!-- Content Row -->
    <b-row>
      <!-- Area Chart -->
      <b-col class="col-xl-8 col-lg-7 col-12">
        <b-card
          class="shadow mb-4"
          no-body
        >
          <!-- Card Header - Dropdown -->
          <b-card-header
            class="py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <b-dropdown
              no-caret
              size="sm"
              right
            >
              <template
                #button-content
                button-class="border-0"
              >
                <b-icon-three-dots-vertical class="text-gray-400" />
              </template>
              <b-dropdown-group header="Dropdown Header:">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
              </b-dropdown-group>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-card-header>
          <!-- Card Body -->
          <b-card-body>
            <LineChart class="chart-area" />
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Pie Chart -->
      <b-col class="col-xl-4 col-lg-5 col-12">
        <b-card
          class="shadow mb-4"
          no-body
        >
          <!-- Card Header - Dropdown -->
          <b-card-header
            class="py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
            <b-dropdown
              no-caret
              size="sm"
              right
            >
              <template
                #button-content
                button-class="border-0"
              >
                <b-icon-three-dots-vertical class="text-gray-400" />
              </template>
              <b-dropdown-group header="Dropdown Header:">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
              </b-dropdown-group>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-card-header>
          <!-- Card Body -->
          <b-card-body>
            <PieChart class="chart-pie pt-4 pb-2" />
            <div class="mt-4 text-center small">
              <span class="mr-2">
                <b-icon-circle-fill class="text-primary" /> Direct
              </span>
              <span class="mr-2">
                <b-icon-circle-fill class="text-success" /> Social
              </span>
              <span class="mr-2">
                <b-icon-circle-fill class="text-info" /> Referral
              </span>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <!-- Content Row -->
    <b-row>
      <!-- Content Column -->
      <b-col class="col-12 col-lg-6 mb-4">

        <!-- Project Card Example -->
        <ProjectCard />

        <!-- Color System -->
        <ColorSystemCols />
      </b-col>

      <b-col class="col-12 col-lg-6 mb-4">
        <!-- Illustrations -->
        <b-card
          class="shadow mb-4"
          no-body
        >
          <b-card-header class="py-3">
            <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
          </b-card-header>
          <b-card-body>
            <div class="text-center">
              <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="img/undraw_posting_photo.svg" alt="">
            </div>
            <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
            <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw →</a>
          </b-card-body>
        </b-card>

        <!-- Approach -->
        <b-card
          class="shadow mb-4"
          no-body
        >
          <b-card-header class="py-3">
            <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
          </b-card-header>
          <b-card-body>
            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
            <p class="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ContentRowCard from './dashboard/ContentRowCard.vue'
import LineChart from './dashboard/LineChart.vue'
import PieChart from './dashboard/PieChart.vue'
import ProjectCard from './dashboard/ProjectCard.vue'
import ColorSystemCols from './dashboard/ColorSystemCols.vue'

export default {
  name: 'Dashboard',
  components: {
    ContentRowCard,
    LineChart,
    PieChart,
    ProjectCard,
    ColorSystemCols
  },
  data: () => ({
    contentRowCards: [
      {
        icon: 'calendar2',
        lineFirst: 'Earnings (Monthly)',
        lineSecond: '$40,000',
        variant: 'primary'
      },
      {
        icon: 'wallet2',
        lineFirst: 'Earnings (Annual)',
        lineSecond: '$215,000',
        variant: 'success'
      },
      {
        icon: 'clipboard-data',
        lineFirst: 'Tasks',
        // lineSecond: '50%', // disabled
        progressbar: 50, // value in percent
        variant: 'info'
      },
      {
        icon: 'chat-text',
        lineFirst: 'Pending Requests',
        lineSecond: '18',
        variant: 'warning'
      }
    ]
  })
}

</script>

<style scoped>
/* chart.css */
@import '~chart.js/dist/Chart.css';
</style>
