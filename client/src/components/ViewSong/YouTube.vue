<template lang="html">
  <panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="800"
      :player-height="331">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeId'
  ],

  components: {
    Panel
  }
}
</script>

<style lang="css">
</style>
