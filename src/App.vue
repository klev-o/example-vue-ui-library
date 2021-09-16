<script>
import XCheckbox from "./components/XCheckbox"
import XCustomCheckbox from "./components/XCustomCheckbox"
import XSwitch from "./components/XSwitch"
import XRadio from "./components/XRadio"

export default {
  name: 'App',
  components: {
    XCheckbox,
    XCustomCheckbox, XSwitch, XRadio
  },
  data() {
    return {
      form: {
        rememberMe: true,
        isSwitched: false,
        radio: 'type1'
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
      <p>
        <XCheckbox v-model="form.rememberMe" label="Some prop label" />
      </p>
      <p>
        <XCheckbox v-model="form.rememberMe" >
          <div>I'm slot label</div>
        </XCheckbox>
      </p>
      <p>
        <XCustomCheckbox v-model="form.rememberMe" />
      </p>
      <p>
        <XSwitch v-model="form.isSwitched" />
      </p>
      <p>
        <XRadio v-model="form.radio" native-value="type1">
          I'm radio 1 with slot prop
        </XRadio>
        <XRadio
            v-model="form.radio"
            label="I'm radio 2 with label prop"
            native-value="type2"
        />
        <XRadio
            v-model="form.radio"
            native-value="type3"
        />
      </p>
    </div>
  </div>
</template>