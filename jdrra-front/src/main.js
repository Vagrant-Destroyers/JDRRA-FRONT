import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

// Don't forget to include the Bootstrap CSS/SCSS files!
import 'bootstrap/scss/bootstrap.scss'

import { domain, clientId } from '../auth_config.json'

// Import the plugin here
import { Auth0Plugin } from './auth'

// Global registration
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
