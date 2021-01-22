<template>
  <b-form
    :class="getFormClass (displayIn)"
    @submit.stop.prevent="alert('Form Submitted')"
  >
    <b-input-group>
      <b-form-input
        class="form-control bg-light border-0 small"
        placeholder="Search for..."
        aria-label="Search"
        aria-describedby="basic-addon2"
      ></b-form-input>
      <b-input-group-append>
        <b-button
          variant="primary"
          type="submit">
          <b-icon-search scale="0.66"  />
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
export default {
  name: 'TopbarSearch',
  props: {
    displayIn: {
      validator: function (value) {
        // The value must match one of these strings
        return ['Topbar', 'Navbar'].indexOf(value) !== -1
      }
    }
  },
  methods: {
    getFormClass (displayIn) {
      // Default value, for 'Topbar'
      let formClass = 'd-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search'

      if (displayIn === 'Navbar') {
        formClass = 'form-inline mr-auto w-100 navbar-search'
      }

      return formClass
    }
  }
}
</script>
