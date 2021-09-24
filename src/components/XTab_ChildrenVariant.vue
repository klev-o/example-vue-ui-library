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
    console.log(this.$parent);
  },
};
</script>

<template>
  <article v-show="isActive" class="tabs-content">
    <slot />
  </article>
</template>
