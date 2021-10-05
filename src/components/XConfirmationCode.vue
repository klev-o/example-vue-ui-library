<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    total: {
      type: Number,
      default: 6,
    },
    type: {
      type: String,
      default: 'number',
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      values: this.getValues(),
    };
  },
  methods: {
    getValues() {
      const values = [];

      for (let i = 0; i < this.total; i++) {
        values.push(this.value[i]);
      }

      return values;
    },
    onInput() {
      const value = this.values.join('');
      this.$emit('input', value);
    },
  },
  watch: {
    total() {
      this.values = this.getValues();
    },
    value() {
      //this.$refs.input[this.value.length].focus()
      this.values = this.getValues();
    },
  },
  mounted() {
    //needs user interaction
    // if (this.autofocus) {
    //   this.$refs.input[0].focus();
    // }
  },
};
</script>

<template>
  <div class="columns">
    <div v-for="i in total" :key="i" class="column">
      <input
          ref="input"
          v-model="values[i - 1]"
          class="input"
          :type="type"
          :autofocus="autofocus && (i == 1)"
          @input="onInput(i - 1)"
      >
      {{i}}
    </div>

  </div>
</template>

<style scoped>
.columns {
  max-width: 400px;
  margin: auto;
}
</style>
