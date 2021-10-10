<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: '',
    },
    light: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'small', 'normal', 'medium', 'large'].includes(value);
      }
    },
  },
  generateClass(props) {
    let classes = '';

    if (props.type) {
      classes += `is-${props.type} `;
    }

    if (props.size) {
      classes += `is-${props.size} `;
    }

    if (props.light) {
      classes += 'is-light ';
    }

    if (props.outlined) {
      classes += 'is-outlined ';
    }

    if (props.inverted) {
      classes += 'is-inverted ';
    }

    if (props.rounded) {
      classes += 'is-rounded ';
    }

    if (props.loading) {
      classes += 'is-loading ';
    }

    return classes;
  },
};
</script>

<template functional>
  <component
      :is="props.tag"
      class="button"
      :class="[$options.generateClass(props), data.staticClass, data.class]"
      :style="[data.staticStyle, data.style]"
      type="button"
      v-bind="data.attrs"
      v-on="listeners">
    <span v-if="slots().iconLeft" class="icon">
      <slot name="iconLeft" />
    </span>
    <slot />
    <span v-if="slots().iconRight" class="icon">
      <slot name="iconRight" />
    </span>
  </component>
</template>
