<script>
let apiIsLoading = false;
let apiIsReady = false;
const onReadyCallbacks = [];

export default {
  props: {
    videoId: {
      type: String,
    },
  },
  data() {
    return {
      paused: true,
      muted: false,
    };
  },
  watch: {
    videoId(newValue) {
      if (this.player) {
        this.player.loadVideoById(newValue);
      }
    },
    muted(value) {
      if (value) {
        this.$emit('mute');
      } else {
        this.$emit('unmute');
      }
    },
    paused(value) {
      if (value) {
        this.$emit('pause');
      } else {
        this.$emit('play');
      }
    },
  },
  methods: {
    onFinally() {
      apiIsLoading = false;
    },
    mute() {
      if (!this.player) {
        return;
      }

      this.player.mute();
      this.muted = true;
    },
    unMute() {
      if (!this.player) {
        return;
      }

      this.player.unMute();
      this.muted = false;
    },
    createPlayer() {
      this.player = new window.YT.Player(this.$refs.player, {
        height: '390',
        width: '640',
        videoId: this.videoId,
        playerVars: {
          playsinline: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          autoplay: 1,
        },
        events: {
          'onReady': () => {
            this.$emit('ready', this.player);
            this.muted = this.player.isMuted();
          },
          'onStateChange': (event) => {
            if (event.data === window.YT.PlayerState.PAUSED) {
              this.paused = true;
            } else {
              this.paused = false;
            }
          }
        }
      });
    },
    loadAPI() {
      if (apiIsReady) {
        this.createPlayer();
        return;
      }

      onReadyCallbacks.push(this.createPlayer);

      if (apiIsLoading) {
        return;
      }

      apiIsLoading = true;

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.onload = this.onFinally;
      tag.onerror = this.onFinally;
      tag.onabort = this.onFinally;
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => {
        onReadyCallbacks.forEach(callback => callback());
        apiIsReady = true;
      };
    },
  },
  mounted() {
    this.loadAPI();
  },
  destroyed() {
    this.player.destroy();
  },
};
</script>

<template>
  <div class="box">
    <div class="is-relative is-inline-block">
      <div ref="player" />
      <div class="player_overlay" />
    </div>
    <div class="buttons">
      <button v-show="paused" class="button" @click="player.playVideo()">
        Play
      </button>
      <button v-show="!paused" class="button" @click="player.pauseVideo()">
        Pause
      </button>
      <button v-show="!muted" class="button" @click="mute()">
        mute
      </button>
      <button v-show="muted" class="button" @click="unMute()">
        unMute
      </button>
    </div>
  </div>
</template>

<style scoped>
.player_overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>