<template>
  <div class="text-center" v-if="weather">
    <v-row align="center" justify="center">
      <v-img :src="weatherIcon"
        max-height="42"
        max-width="42"
        class="pa-0 ma-0"
        aspect-ratio="1"
        />
      {{ weather.weather[0].description }}
    </v-row>
    <v-icon>mdi-thermometer</v-icon>
    {{ temp }}&deg;/
    {{ tempFeels }}&deg;<br/>
    <v-icon>mdi-water</v-icon>
    {{ humidity }}&percnt;
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
  computed: {
    ...mapGetters(['weather']),
    weatherIcon () { return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png` },
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
.weather-icon {
  max-width: 42px;
  line-height: 1.5px;
}
</style>
