<script>
export default {
  props: {
    tag: {
      type: [String, Object],
      default: 'div',
    },
  },
};
</script>

<template>
  <component :is="tag" class="dropdown-item">
    <slot />
  </component>
</template>
