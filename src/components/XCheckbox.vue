<script>
  export default {
    props: {
      value: {
        type: Boolean
      },
      label: {
        type: String,
      },
    }
  }
</script>

<template>
  <label class="checkbox">
    <input
        :checked="value"
        @input="$emit('input', $event.target.checked)"
        type="checkbox"
    >
    <!-- <template v-if="label && !$slots.default">
      {{ label }}
    </template>

    <slot /> -->
    <slot>
      <template v-if="label">
        {{ label }}
      </template>
    </slot>
  </label>
</template>