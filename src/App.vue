<script>
import MCheckbox from "./components/MCheckbox";

export default {
  name: 'App',
  components: {
    MCheckbox
  },
  data() {
    return {
      form: {
        rememberMe: true
      }
    }
  },
  methods : {
    // onChange(event) {
    //   console.log(event)
    //   this.form.rememberMe = event.target.checked
    // }
  }
}
</script>

<template>
  <div id="app" class="section">
    <div class="container">
      <MCheckbox v-model="form.rememberMe" />
    </div>
  </div>
</template>