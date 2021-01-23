<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Cards</h1>

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

    <!-- default examples -->
    <b-row>
      <!-- Default and Basic Card Examples -->
      <b-col class="col-12 col-lg-6">

        <!-- Default Card Example -->
        <b-card class="mb-4" no-body>
          <b-card-header>
            Default Card Example
          </b-card-header>
          <b-card-body>
            This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
          </b-card-body>
        </b-card>

        <!-- Basic Card Example -->
        <b-card class="shadow mb-4" no-body>
          <b-card-header class="py-3">
            <h6 class="m-0 font-weight-bold text-primary">Basic Card Example</h6>
          </b-card-header>
          <b-card-body>
            The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Dropdown and Collapsable Card Example -->
      <b-col class="col-12 col-lg-6">

        <!-- Dropdown Card Example -->
        <b-card class="shadow mb-4" no-body>
          <!-- Card Header - Dropdown -->
          <b-card-header
            class="py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 class="m-0 font-weight-bold text-primary">
              Dropdown Card Example
            </h6>
            <b-dropdown
              no-caret
              size="sm"
              right
              variant="none"
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
            Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
          </b-card-body>
        </b-card>

        <!-- Collapsable Card Example -->
        <b-card class="shadow mb-4" no-body>
          <b-card-header class="p-0" >
            <b-button
              href="#"
              block
              class="p-3 px-0 d-flex flex-row align-items-center justify-content-between"
              v-b-toggle.accordion-1
              variant="none"
            >
              <h6 class="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>

              <span>
                <b-icon-chevron-down scale="0.5" class="when-opened" />
                <b-icon-chevron-right scale="0.5" class="when-closed" />
              </span>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import ContentRowCard from './dashboard/ContentRowCard.vue'

export default {
  name: 'Dashboard',
  components: {
    ContentRowCard
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
