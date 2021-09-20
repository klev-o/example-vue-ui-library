<script>
export default {
  props: {
    navigation: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      if (!this.$parent || !this.$parent.activeTab) {
        return false;
      }

      return this.$parent.activeTab === this;
    },
  },
  mounted() {
    this.$parent.addTab(this);
  },
  destroyed() {
    this.$parent.removeTab(this);
  },
};
</script>

<template>
  <article v-show="isActive" class="tabs-content">
    <slot />
  </article>
</template>
