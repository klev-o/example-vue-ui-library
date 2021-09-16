<script>
//import XCheckbox from "./components/XCheckbox"
import XCustomCheckbox from "./components/XCustomCheckbox"
import XSwitch from "./components/XSwitch"

export default {
  name: 'App',
  components: {
    // XCheckbox, XCustomCheckbox
    XCustomCheckbox, XSwitch
  },
  data() {
    return {
      form: {
        rememberMe: true,
        isSwitched: false,
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
    <div class="container content">
<!--      <XCheckbox v-model="form.rememberMe" />-->
      <p>
        <XCustomCheckbox v-model="form.rememberMe" />
      </p>
      <p>
        <XSwitch v-model="form.isSwitched" />
      </p>
    </div>
  </div>
</template>