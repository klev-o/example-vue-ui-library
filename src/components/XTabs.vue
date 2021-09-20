<script>
export default {
  data() {
    return {
      tabs: [],
      activeTab: null,
    };
  },
  methods: {
    addTab(tab) {
      this.tabs.push(tab);

      if (this.tabs.length === 1) {
        this.activeTab = this.tabs[0];
      }
    },
    removeTab(tab) {
      this.tabs = this.tabs.filter(v => v !== tab);

      if (this.activeTab === tab) {
        this.activeTab = this.tabs[0];
      }
    },
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