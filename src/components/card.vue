<!-- eslint-disable -->
<template>
  <div class="margin">
    <div class="col-lg-12 col-md-6 col-sm-4">
      <div class="row d-flex justify-content-center">
        <div
          class="card mr-4 ml-4 mb-4"
          style="width: 20rem"
          v-for="item in results"
          :key="item"
        >
          <img
            class="card-img-top"
            :src="item.picture.large"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-title font-weight-bold">
              {{ item.name.title }}
              {{ item.name.first }}
              {{ item.name.last }}
            </p>
            <p class="card-title">{{ item.email }}</p>
            <p class="card-text mt-4">
              {{ item.gender }}
            </p>
            <p class="card-text">
              {{ item.phone }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    axios
      .get("https://randomuser.me/api/?results=21")
      .then((response) => (this.results = response.data.results));
  },
};
</script>

<style scoped>
.margin {
  margin-top: 65px !important;
}
</style>