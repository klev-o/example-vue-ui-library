<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Boolean, Object, Number]
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    inputClass: {
      type: [String, Object]
    },
  },
  computed: {
    inputListeners() {
      const listeners = {
        ...this.$listeners,
        input: this.onInput,
      };

      delete listeners.done;

      return listeners;
    },
  },
  methods: {
    onInput($event) {
      this.$emit('input', $event.target.value);
    },
  },
  mounted() {
    console.log(this.$listeners);
  },
};
</script>

<template>
  <div class="field">
    <label v-if="label || $slots.label" class="label" @click="$emit('done')">
      <template v-if="label && !$slots.label">
        {{ label }}
      </template>
      <slot name="label" />
    </label>
    <div class="control">
      <input
          class="input"
          :class="inputClass"
          v-bind="$attrs"
          :type="type"
          :value="value"
          v-on="inputListeners"
      >
    </div>
  </div>
</template>