<script>
export default {
  data() {
    return {
      tabs: [],
      activeTab: null,
    };
  },
  methods: {
    hasSameValues(newTabs, oldTabs) {
      if (newTabs.length !== oldTabs.length) {
        return false;
      }

      return newTabs.every((tab, i) => tab === oldTabs[i]);
    },
  },
  mounted() {
    this.tabs = this.$children.slice();
    this.activeTab = this.tabs[0];
  },
  updated() {
    const newTabs = this.$children.slice();

    if (this.hasSameValues(newTabs, this.tabs)) {
      return;
    }

    this.tabs = newTabs;
  },
};
</script>

<template>
  <section class="box">
    <div class="tabs">
      <ul>
        <li
            v-for="(tab, i) in tabs"
            :key="i"
            :class="{'is-active': activeTab == tab}">
          <a @click.prevent="activeTab = tab">
            {{ tab.navigation }}
          </a>
        </li>
      </ul>
    </div>

    <div class="tabs-contents">
      <slot />
    </div>
  </section>
</template>