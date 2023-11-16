import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
createApp(App).mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* import * as Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app') */

/* import { BootstrapVue } from 'bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import * as Vue from 'vue'

const myApp = createApp(App)
myApp.use(BootstrapVue)
myApp.mount('#app') */

/* import Vue from 'vue'
// import * as Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app') */

/* require('./bootstrap');

import { createApp } from 'vue'
import test from './components/Test.vue';

createApp({
    components: { test }
}).mount('#app') */
