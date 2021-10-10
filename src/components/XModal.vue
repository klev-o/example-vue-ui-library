<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    card: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClose() {
      this.$emit('update:active', false);
    },
  },
  mounted() {
    document.body.appendChild(this.$el);
  },
};
</script>
<template>
  <div class="modal" :class="{'is-active': active}">
    <div class="modal-background" @click="onClose" />
    <div :class="{'modal-content': !card, 'modal-card': card}">
      <template v-if="card && ($slots.head || $slots.body || $slots.foot)">
        <header class="modal-card-head">
          <slot name="head" />
        </header>
        <section class="modal-card-body">
          <slot name="body" />
        </section>
        <footer class="modal-card-foot">
          <slot name="foot" />
        </footer>
      </template>
      <slot v-else />
    </div>
    <button
        class="modal-close is-large"
        aria-label="close"
        @click="onClose"
    />
  </div>
</template>
