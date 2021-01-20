<template>
  <b-row>
    <b-col
      class="col-lg-6 mb-4"
      v-for="(colorSystem, key) in colorSystemCols"
      :key="key"
    >
      <b-card
        class="shadow"
        :class="
          'bg-'+colorSystem.classBG+
          ' text-'+colorSystem.classText
        "
      >
        {{ colorSystem.text }}
        <div
          class="small"
          :class="'text-'+colorSystem.classText+'-50'"
        >#{{ colorSystem.colorCode }}</div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'ColorSystem',
  data: () => ({
    colorSystemCols: [
      {
        classBG: 'primary',
        classText: 'white',
        colorCode: '4e73df',
        text: 'Primary'
      },
      {
        classBG: 'success',
        classText: 'white',
        colorCode: '1cc88a',
        text: 'Success'
      },
      {
        classBG: 'info',
        classText: 'white',
        colorCode: '36b9cc',
        text: 'Info'
      },
      {
        classBG: 'warning',
        classText: 'white',
        colorCode: 'f6c23e',
        text: 'Warning'
      },
      {
        classBG: 'danger',
        classText: 'white',
        colorCode: 'e74a3b',
        text: 'Danger'
      },
      {
        classBG: 'secondary',
        classText: 'white',
        colorCode: '858796',
        text: 'Secondary'
      },
      {
        classBG: 'light',
        classText: 'black',
        colorCode: 'f8f9fc',
        text: 'Light'
      },
      {
        classBG: 'dark',
        classText: 'white',
        colorCode: '5a5c69',
        text: 'Dark'
      }
    ]
  })
}

</script>
