/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Counter from "../components/counter";
import Card from "../components/card";
import Timer from "../components/timer";
import Home from "../components/home";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/timer',
      name: 'Timer',
      component: Timer
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
  ]
})
