<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Muesli Mixer</h1>
    </div>

    <b-row>
      <!-- Ergebniss anschauen -->
      <b-col
        class="col-12 col-md-6 col-lg-5 col-xl-4 mb-4 order-2 order-md-1"
      >
        <b-card>
          Ergebniss anschauen
        </b-card>
      </b-col>

      <!-- Müsli wählen -->
      <b-col
        class="col-12 col-md-6 col-lg-7 col-xl-8 mb-4 order-1 order-md-2"
      >
        <!-- Müsli wählen -->
        <b-card>
          <div class="accordion" role="tablist">
            <b-card
              no-body
              class="mb-1"
              v-for="(ingredients, index) in ingredients"
              :key="index"
            >
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  v-b-toggle="'accordion-'+index"
                  variant="info"
                >{{ ingredients.name }}</b-button>
              </b-card-header>
              <b-collapse
                :id="'accordion-'+index"
                accordion="my-accordion"
                role="tabpanel"
                :visible="index === 0"
              >
                <b-card-body>
                  <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <p>Es ist kein echter Online-Shop. Es ist nur eine Schauseite.</p>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => ({
    ingredients: [
      {
        name: 'Müslibasis',
        sorts: [
          {
            name: '3 Basiskorn'
          }
        ]
      },
      {
        name: 'Müsli verfeinern'
      },
      {
        name: 'Früchte'
      },
      {
        name: 'Nüsse und Kerne'
      },
      {
        name: 'Extras'
      }
    ]
  })
}
</script>
