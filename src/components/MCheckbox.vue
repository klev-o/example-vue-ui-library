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
  <label class="checkbox">
    <input :checked="value" @input="$emit('input', $event.target.checked)" type="checkbox">
    Remember me
    <span class="has-text-danger">
      {{value ? 'checked' : 'not checked'}}
    </span>
  </label>
</template>