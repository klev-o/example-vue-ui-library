<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'alert',
      validator(value) {
        return ['alert', 'confirm', 'prompt'].includes(value);
      },
    },
    message: {
      type: String,
      required: true,
    },
    inputAttrs: {
      type: Object,
    },
    inputValue: {
      type: String,
    },
  },
  data() {
    return {
      promptValue: this.inputValue,
    };
  },
  methods: {
    onClose() {
      this.$emit('update:active', false);
      this.promptValue = '';
    },
    onConfirm() {
      let value;

      if (this.type === 'confirm') {
        value = true;
      } else if (this.type === 'prompt') {
        value = this.promptValue;
      }

      this.$emit('confirm', value);
      this.onClose();
    },
    onCancel() {
      let value;

      if (this.type === 'confirm') {
        value = false;
      } else if (this.type === 'prompt') {
        value = null;
      }

      this.$emit('cancel', value);
      this.onClose();
    },
  },
  mounted() {
    document.body.appendChild(this.$el);
  },
};
</script>
<template>
  <div class="modal" :class="{'is-active': active}">
    <div class="modal-background" />
    <div class="modal-content">
      <div class="box">
        <div class="block">
          {{ message }}
        </div>
        <form v-if="type == 'prompt'" class="block">
          <input class="input" type="text" v-model="promptValue" v-bind="inputAttrs">
        </form>
        <div class="buttons is-right">
          <button class="button is-success" @click="onConfirm">
            ok
          </button>
          <button
              v-if="type == 'confirm' || type == 'prompt'"
              class="button is-danger is-outlined"
              @click="onCancel">
            cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  max-width: 320px;
}
</style>
