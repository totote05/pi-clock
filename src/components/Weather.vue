<template>
  <div class="text-left ml-8" v-if="weather">
    <v-row align="center">

      <div class="text-center d-flex-column">
        <span
          class="weather-icon"
          :style="{background: `url(${weatherIcon})`}"
        ></span>
        <span class="weather-caption">
          {{ weather.weather[0].description | capitalize }}
        </span>
      </div>

      <div class="ml-4">
        <v-icon>mdi-thermometer</v-icon>
        <span class="temperature">{{ temp }}&deg;</span>/
        {{ tempFeels }}&deg;<br/>
        <v-icon>mdi-water</v-icon>
        {{ humidity }}&percnt;
      </div>

    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      interval: null,
    }
  },
  filters: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  computed: {
    ...mapGetters(['weather']),
    weatherIcon () { return `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png` },
    temp () { return Math.round(this.weather.main.temp) || '-' },
    tempFeels () { return Math.round(this.weather.main.feels_like) || '-' },
    humidity () { return Math.round(this.weather.main.humidity) || '-' },
  },
  methods: {
    ...mapActions(['fetchWeather']),
  },
  created () {
    this.fetchWeather()
    this.interval = setInterval(this.fetchWeather, 30000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
}
</script>

<style scoped>
.d-flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.weather-icon {
  width: 64px;
  height: 64px;
  background-position: center !important;
}
.temperature {
  font-size: 3rem;
}
</style>
