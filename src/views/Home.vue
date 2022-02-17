<template>
  <v-container black fluid class="fill-height">
      <v-row align="center" justify="center">
          <v-col cols="6">
            <clock />
          </v-col>
          <v-col cols="6">
            <weather/>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import Clock from '@/components/Clock'
import Weather from '@/components/Weather'

export default {
  components: { Clock, Weather },
}
</script>
