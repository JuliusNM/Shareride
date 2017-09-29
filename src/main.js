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
import GetRide from './components/GetRide'
import Register from './components/Register'
import VuePassword from 'vue-password'
import GiveRide from './components/GiveTest'
import ThankYou from './components/ThankYou'

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
  {path: '/giveride', component: GiveRide},
  {path: '/register', component: Register},
  {path: '/getride', component: GetRide},
  {path: '/thanks', component: ThankYou}
  ]
})

new Vue({
  router,
  template: `
  <div id="app">
  <b-navbar type="light" toggleable style="background-color: #CCFF90;">
    <b-nav-toggle target="nav_dropdown_collapse"></b-nav-toggle>
    <router-link to="/" class="navbar-brand">ShareRide</router-link></b-nav-item>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-nav is-nav-bar>
        <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/about">About</router-link></b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>
  <router-view></router-view>
  </div>
 `
}).$mount('#app')
