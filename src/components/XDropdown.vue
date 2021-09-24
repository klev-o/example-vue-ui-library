<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('update:active', !this.active);
    },
  },
};
</script>

<template>
  <div
      class="dropdown"
      :class="{'is-active': active, 'is-hoverable': hoverable}">
    <div class="dropdown-trigger" @click="toggle">
      <slot name="trigger" />
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot />
      </div>
    </div>
  </div>
</template>