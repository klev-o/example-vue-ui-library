<script>
import XVideoPlayer from './components/XVideoPlayer.vue';

export default {
  name: 'App',
  components: {
    XVideoPlayer,
  },
  data() {
    return {
      videoId: 'M7lc1UVf-VE',
      is2PlayerShown: true,
      is3PlayerShown: false,
    };
  },
};
</script>


<template>
  <div id="app">
    <div class="section has-text-centered">
      <h1 class="title">
        Video player
        <button @click="is3PlayerShown = true">toggl 3rd player</button>
      </h1>
      <div class="control">
        <input v-model.lazy="videoId" type="text" class="input">
      </div>
    </div>
    <XVideoPlayer :video-id="videoId" />
    <XVideoPlayer v-if="is2PlayerShown" />
    <div v-if="is2PlayerShown" class="block">
      <button @click="is2PlayerShown = false">remove</button>
    </div>
    <XVideoPlayer v-if="is3PlayerShown" />
  </div>
</template>
