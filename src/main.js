/* eslint-disable */
import Vue from 'vue'
import App from './App'
import store from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueRouter from 'vue-router';
import router from './router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  template: `
  <div>
    <div class="row d-flex justify-content-center mt-4">
      <router-link to="/home" class="btn btn-success mr-4">Home</router-link>
      <router-link to="/counter" class="btn btn-danger mr-4">
        Inc and Dec Number
      </router-link>
      <router-link to="/timer" class="btn btn-warning mr-4"
        >Tomato Timer</router-link
      >
      <router-link to="/card" class="btn btn-info mr-4">Card View</router-link>
    </div>
      <router-view class="view"></router-view>
  </div>
  `
}).$mount('#app');


