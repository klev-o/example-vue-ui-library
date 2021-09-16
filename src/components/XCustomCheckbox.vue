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
  <button class="button" type="button" @click="$emit('input', !value)">
    <span class="icon" :class="{'has-text-success': value}">
      <i
          class="far"
          :class="{'fa-square' : !value, 'fa-check-square': value}"
      />
    </span>
  </button>
</template>