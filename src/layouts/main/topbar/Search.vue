<template>
    <b-nav-form
      form-class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
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
    </b-nav-form>
</template>
