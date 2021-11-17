<script>
import XCheckbox from "./components/XCheckbox"
import XCustomCheckbox from "./components/XCustomCheckbox"
import XSwitch from "./components/XSwitch"
import XRadio from "./components/XRadio"
import XInput from "./components/XInput"
import XTabs from "./components/XTabs"
import XTab from "./components/XTab"
import XDropdown from './components/XDropdown.vue';
import XDropdownItem from './components/XDropdownItem.vue';
import XDropdownDivider from './components/XDropdownDivider.vue';
import XConfirmationCode from './components/XConfirmationCode.vue';
import XButton from './components/XButton.vue';
import XModal from './components/XModal.vue';
import XDialog from './components/XDialog.vue';
//import Vue from 'vue'
import XProgramaticDialog from './components/XProgramaticDialog.js';
import XCountDown from './components/XCountDown';
import XCountDownWithRootNode from './components/XCountDownWithRootNode';

export default {
  name: 'App',
  components: {
    XCheckbox,
    XCustomCheckbox,
    XSwitch,
    XRadio,
    XInput,
    XTabs,
    XTab,
    XDropdown,
    XDropdownItem,
    XDropdownDivider,
    XConfirmationCode,
    XButton,
    XModal,
    XDialog,
    XCountDown,
    XCountDownWithRootNode
  },
  data() {
    return {
      form: {
        rememberMe: true,
        isSwitched: false,
        radio: 'type1',
        name: '',
        email: '',
        confirmationCode: '1234'
      },
      tabs: ['First', 'Second', 'Third', 4],
      hardCodedTabIsDeleted: false,
      dropdownIsOpen: false,
      isModalOpen1: false,
      isModalOpen2: false,
      isAlertOpen: false,
      isConfirmOpen: false,
      isPromptOpen: false,
    }
  },
  methods : {
    // onChange(event) {
    //   console.log(event)
    //   this.form.rememberMe = event.target.checked
    // }
    removeTab(tab) {
      this.tabs = this.tabs.filter(v => v !== tab);
    },
    sayHello() {
      window.alert('hello');
    },
    dialogAlertValue(event) {
      console.log(event)
    },
    openDialog(type) {
      //example
      // const XDialogClass = Vue.extend(XDialog)
      // const xDialog = new XDialogClass({
      //   propsData: {
      //     type,
      //     message: 'function based dialog'
      //   }
      // })
      //
      // const div = document.createElement('div')
      // document.body.appendChild(div)
      // xDialog.$mount(div)
      // console.log('dialog', xDialog)
      XProgramaticDialog(type, {
        message: 'I am a dynamic dialog'
      }, {
        cancel(value) {
          console.log('this is cancelled programatically from App.vue', value);
        },
      }, this);
    },
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

      <div class="block">
        <XTabs>
          <XTab v-if="!hardCodedTabIsDeleted" navigation="First tab">
            First content
            <button class="button is-danger" @click="hardCodedTabIsDeleted = true">
              delete
            </button>
          </XTab>
          <XTab v-for="i in tabs" :key="i" :navigation="`item ${i}`">
            Content {{ i }}
            <button class="button is-danger" @click="removeTab(i)">
              delete
            </button>
          </XTab>
        </XTabs>

        <button class="button" @click="tabs.push(tabs.length)">
          Add tab
        </button>
      </div>

      <div class="block">
        <XDropdown :active.sync="dropdownIsOpen"> <!-- @update:active="dropdownIsOpen = $event" -->
          <template #trigger>
            <button class="button is-primary">
              Trigger
            </button>
          </template>

          <XDropdownItem tag="a" href="#">
            Item 1
          </XDropdownItem>
          <XDropdownItem>
            Item 2
          </XDropdownItem>
          <XDropdownDivider />
          <XDropdownItem tag="a">
            Item 3
          </XDropdownItem>
        </XDropdown>

        <button class="button" @click="dropdownIsOpen = !dropdownIsOpen">
          Toggle dropdown
        </button>
      </div>

      <div class="block">
        <XConfirmationCode
            v-model="form.confirmationCode"
            :total="4"
            autofocus
        />
      </div>

      <div class="block">
        <XButton
            class="has-text-weight-bold"
            tag="a" href="#" type="danger"
            size="large" rounded light>i'm a btn</XButton>
      </div>
      <div class="block">
        <XButton type="primary" size="small" outlined>i'm a btn</XButton>
      </div>
      <div class="block">
        <XButton type="success" size="medium" inverted>i'm a btn</XButton>
      </div>
      <div class="block">
        <XButton type="info" @click="sayHello" :loading="false">
          i'm a btn
        </XButton>
      </div>

      <div class="block">
        <XModal v-if="isModalOpen1" :active.sync="isModalOpen1">
          <div class="box">
            I'm the modal 1
          </div>
        </XModal>
        <XModal :active.sync="isModalOpen2" card>
          i'm a modal 2
        </XModal>

        <button class="button" @click="isModalOpen1 = !isModalOpen1">
          toggle modal 1
        </button>
        <button class="button" @click="isModalOpen2 = !isModalOpen2">
          toggle modal 2
        </button>
      </div>

      <div class="block">
        <XDialog :active.sync="isAlertOpen" message="Just an alert" @confirm="dialogAlertValue" />
        <XDialog :active.sync="isConfirmOpen" message="Are you an adult?" type="confirm" />
        <XDialog
            :active.sync="isPromptOpen"
            message="How old are you?"
            type="prompt"
            :input-attrs="{'placeholder': 'Enter somthing'}"
        />

        <button class="button" @click="openDialog('confirm')">
          programatically
        </button>

        <button class="button" @click="isAlertOpen = !isAlertOpen">
          alert
        </button>
        <button class="button" @click="isConfirmOpen = !isConfirmOpen">
          Confirm
        </button>
        <button class="button" @click="isPromptOpen = !isPromptOpen">
          Prompt
        </button>
      </div>

      <div class="block">
        <XCountDown datetime="2021-11-13T16:30:00">
          <template #default="{ isPassed, days, hours, minutes, seconds }">
            <div v-if="isPassed" class="notification is-primary">
              date passed
            </div>
            <div v-else>
              <div class="box level is-size-1 has-text-weight-bold has-text-danger">
                <div class="level-item">
                  {{ days }}d
                </div>
                <div class="level-item">
                  {{ hours }}h
                </div>
                <div class="level-item">
                  {{ minutes }}m
                </div>
                <div class="level-item">
                  {{ seconds }}s
                </div>
              </div>
            </div>
          </template>
        </XCountDown>
      </div>

      <div class="block">
        <XCountDownWithRootNode datetime="2021-11-13T16:30:00">
          <template #default="{ isPassed, days, hours, minutes, seconds }">
            <div v-if="isPassed" class="notification is-primary">
              date passed
            </div>
            <div v-else>
              <div class="box level is-size-1 has-text-weight-bold has-text-danger">
                <div class="level-item">
                  {{ days }}d
                </div>
                <div class="level-item">
                  {{ hours }}h
                </div>
                <div class="level-item">
                  {{ minutes }}m
                </div>
                <div class="level-item">
                  {{ seconds }}s
                </div>
              </div>
            </div>
          </template>
        </XCountDownWithRootNode>
      </div>



    </div>
  </div>
</template>