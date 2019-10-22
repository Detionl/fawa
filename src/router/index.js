import Vue from 'vue'
import Router from 'vue-router'

import finish from '../components/finish/finish.vue'
import notfinish from '../components/notfinish/notfinish.vue'
import index from '../components/index/index.vue'
import ongoing from '../components/ongoing/ongoing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/index'},
    { path: '/finish', component: finish },
    { path: '/notfinish', component: notfinish },
    { path: '/index', component: index },
    { path: '/ongoing', component: ongoing },
  ],
  linkActiveClass:'active'
})
