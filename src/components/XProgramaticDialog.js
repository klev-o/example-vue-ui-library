import Vue from 'vue';
import XDialog from './XDialog.vue';

export default (type, props, events, parent) => {
  const DialogClass = Vue.extend(XDialog);
  const dialog = new DialogClass({
    parent,
    propsData: {
      ...props,
      type,
    },
  });

  if (events) {
    Object.keys(events).forEach((eventName) => {
      dialog.$on(eventName, events[eventName]);
    });
  }

  const div = document.createElement('div');
  document.body.appendChild(div);
  dialog.$mount(div);
  dialog.$on('update:active', (value) => {
      if (!value) {
        dialog.$destroy();
        dialog.$el.parentNode.removeChild(dialog.$el);
      }
    });
};
