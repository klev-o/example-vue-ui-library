<script>
import XCheckbox from "./components/XCheckbox"
import XCustomCheckbox from "./components/XCustomCheckbox"
import XSwitch from "./components/XSwitch"
import XRadio from "./components/XRadio"
import XInput from "./components/XInput"

export default {
  name: 'App',
  components: {
    XCheckbox,
    XCustomCheckbox, XSwitch, XRadio, XInput
  },
  data() {
    return {
      form: {
        rememberMe: true,
        isSwitched: false,
        radio: 'type1',
        name: '',
        email: ''
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

      <p>
        <XInput
            class="has-text-danger"
            label="Name"
            placeholder="Enter your name"
            v-model="form.name"
        />
      </p>
      <p>
        <XInput
            class="has-text-danger"
            type="email"
            placeholder="Enter your email"
            foo="bar"
            v-model="form.email"
            @focus="form.name = 'focus'"
            @done="form.name = 'done'"
        >
          <template #label>
            Email (required)
          </template>
        </XInput>
      </p>
    </div>
  </div>
</template>