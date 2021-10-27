<template>
  <div>
    <h1 :style="{fontSize: hFontSize + 'em'}">Event Up Parent</h1>
    <child :fontSize="hFontSize" v-on:enlargeText="enlargeText"></child>

    <!-- <child :fontSize="hFontSize" v-no:enlargeText="hFontSize += $event"></child> -->
  </div>
</template>

<script>
import child from './Child'
export default {
  components: {
    child
  },
  data () {
    return {
      hFontSize: 1
    }
  },
  methods: {
    enlargeText (size) {
      this.hFontSize += size
    }
  }
}
</script>

<style>

</style>