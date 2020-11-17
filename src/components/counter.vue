<!-- eslint-disable -->
<template>
  <div class="margin">
    <div class="row d-flex justify-content-center">
      <p>Demo Increment and Decrement a Number</p>
    </div>
    <div class="row d-flex justify-content-center">
      <h1 class="display-4">{{ counterTampil }}</h1>
    </div>
    <div class="row d-flex justify-content-center">
      <button type="button" @click="tambah" class="btn btn-outline-primary">
        Increment
      </button>
    </div>
    <div class="row d-flex justify-content-center">
      <button type="button" @click="kurang" class="btn btn-outline-danger">
        Decrement
      </button>
    </div>
    <div class="row d-flex justify-content-center">
      <button type="button" @click="setelUlang" class="btn btn-outline-success">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    tambah() {
      this.$store.commit("increment");
    },
    kurang() {
      this.$store.commit("decrement");
    },
    setelUlang() {
      this.$store.commit("reset");
    },
  },
  computed: {
    counterTampil() {
      return this.$store.getters.getCounter;
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 8px;
  font-size: 12px;
  margin: 6px;
  width: 125px;
}
.margin {
  margin-top: 65px !important;
}
</style>