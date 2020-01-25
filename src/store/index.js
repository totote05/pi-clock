import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather: null,
  },
  mutations: {
    setWeather (state, data) {
      state.weather = data
    },
  },
  actions: {
    async fetchWeather ({ commit }) {
      const url = 'http://api.openweathermap.org/data/2.5/weather?q='
      const params = [
        'San%20Benito,ar',
        'APPID=5a770378691d649bdff7451684ba6dac',
        'units=metric',
        'lang=sp',
      ]

      try {
        const result = await axios.get(`${url}${params.join('&')}`)

        commit('setWeather', result.data)
      } catch (e) {
        console.log(e)
      }
    },
  },
  getters: {
    weather: state => state.weather,
  },
  modules: {
  },
})
