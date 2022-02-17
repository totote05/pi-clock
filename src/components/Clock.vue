<template>
  <div class="text-right">
    <span class="text-capitalize">{{ date }}</span><br/>
    <span class="display-4">{{ clock }}</span>
  </div>
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
    clock () { return this.currentTime.toLocaleTimeString('es-AR', { timeStyle: 'short' }) },
    date () { return this.currentTime.toLocaleDateString('es-AR', { dateStyle: 'full' }) },
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
