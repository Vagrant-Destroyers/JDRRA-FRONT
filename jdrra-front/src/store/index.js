import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    finalJobs: []
  },
  mutations: {
    changeData (state, data) {
      if (data.length === 0) {
        axios.get('https://api.vagrantdestroyers.fun/jobpost')
          .then(response => {
            state.finalJobs = response.data
          }).catch(err => console.log(err))
      } else {
        state.finalJobs = data
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
