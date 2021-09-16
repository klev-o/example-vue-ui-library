<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  }
}
</script>

<template>
  <a
      href="#"
      class="tag"
      @click="$emit('input', !value)"
      :class="{
        'tag-start' : !value,
        'tag-end' :  value
      }"
  >
    <span
        class="tag_state has-background-black"
        :class="{
          'has-background-black': !value,
          'has-background-success': value
        }"
    />
  </a>
</template>

<style scoped>
.tag {
  min-width: 48px;
  justify-content: normal;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.tag_state {
  width: 12px;
  height: 12px;
  border-radius: 30061991px;
  position: relative;
  transition: all .3s ease-out;
}
.tag.tag-start .tag_state {
  left: 0;
  transform: translateX(0%);
}
.tag.tag-end .tag_state {
  left: 100%;
  transform: translateX(-100%);
}
</style>