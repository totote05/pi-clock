<template>
    <div class="display-4 text-center">{{ clock }}</div>
</template>

<script>
export default {
  data () {
    return {
      currentTime: new Date(),
      interval: null,
    }
  },
  computed: {
    clock () { return this.currentTime.toLocaleTimeString('es-AR') },
  },
  methods: {
    updateClock () {
      this.currentTime = new Date()
    },
  },
  created () {
    this.interval = setInterval(this.updateClock, 500)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
}
</script>
