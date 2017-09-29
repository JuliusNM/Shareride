// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
// import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import About from './components/About'
import Home from './components/Home'
import GetGive from './components/GetGive'
import GiveRide from './components/GiveRide'
import GetRide from './components/GetRide'
import Register from './components/Register'
import VuePassword from 'vue-password'
import GiveTest from './components/GiveTest'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(App)
Vue.component(VuePassword)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/info', component: GetGive},
  {path: '/oldgiveride', component: GiveRide},
  {path: '/giveride', component: GiveTest},
  {path: '/register', component: Register},
  {path: '/getride', component: GetRide}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
  <nav class="navbar">
  <a class="navbar-brand" href="#">Shareride</a>

  <div class="container">
  <div class="navbar-header">
  <ul class="nav">
    <li>
      <router-link to="/">Home</router-link>
    </li>&nbsp&nbsp&nbsp
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </ul>
  </div>
   <button class="btn btn-warning" type="submit">+254700084438</button>
  </div>
</nav>
  <router-view></router-view>
  </div>
 `
}).$mount('#app')
