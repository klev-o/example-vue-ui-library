<script>
export default {
  props: {
    value: {
      type: [String, Number, Object],
    },
    nativeValue: {
      type: [String, Number, Object],
      required: true,
    },
    label: {
      type: String,
    },
  },
};
</script>

<template>
  <button
      type="button"
      class="box has-text-weight-bold is-size-3"
      :class="{
      'has-background-success has-text-white': value == nativeValue
    }"
      @click="$emit('input', nativeValue)"
  >
    <slot>
      <template v-if="label">
        {{ label }}
      </template>
      <template v-else>
        {{ nativeValue }}
      </template>
    </slot>
  </button>
</template>

<style scoped>
.box {
  cursor: pointer;
  border: 0;
  min-width: 50%;
}
</style>