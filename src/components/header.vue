<!-- eslint-disable -->
<template>
  <div class="row d-flex justify-content-center">
    <div>
      <router-link to="/" class="btn btn-success mr-4">Home</router-link>
      <router-link to="/counter" class="btn btn-danger mr-4">
        Inc and Dec Number
      </router-link>
      <router-link to="/timer" class="btn btn-warning mr-4"
        >Tomato Timer</router-link
      >
      <router-link to="/card" class="btn btn-info">Card View</router-link>
    </div>
    <router-view class="row d-flex justify-content-center"></router-view>
  </div>
</template>

<script>
/* eslint-disable */
</script>

<style scoped>
</style>