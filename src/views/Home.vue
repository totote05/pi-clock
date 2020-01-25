<template>
  <v-container black fluid class="fill-height">
      <v-row align="center" justify="center">
          <v-col cols="12">
            <clock />
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
