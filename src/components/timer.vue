/* eslint-disable */
<template>
  <div class="margin">
    <div class="container has-text-centered mt-4">
      <div class="row d-flex justify-content-center">
        <h1 class="display-4">{{ minutes }}</h1>
        <h1 class="display-4">:</h1>
        <h1 class="display-4">{{ seconds }}</h1>
      </div>

      <!-- Start Timer -->
      <div class="row d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-primary"
          v-if="!timer"
          @click="startTimer"
        >
          Start
        </button>
      </div>

      <!-- Stop Timer -->
      <div class="row d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-success"
          v-if="timer"
          @click="stopTimer"
        >
          Stop
        </button>
      </div>

      <!-- Reset Timer -->
      <div class="row d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-danger"
          v-if="resetButton"
          @click="resetTimer"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      timer: null,
      totalTime: 25 * 60,
      resetButton: false,
    };
  },
  // ========================
  methods: {
    startTimer() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stopTimer() {
      clearInterval(this.timer);
      this.resetButton = true;
    },
    resetTimer() {
      this.totalTime = 20 * 60;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    helper(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
      }
    },
  },
  // ========================
  computed: {
    minutes() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.helper(minutes);
    },
    seconds() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.helper(seconds);
    },
  },
};
</script>

<style scoped>
.margin {
  margin-top: 65px !important;
}
</style>