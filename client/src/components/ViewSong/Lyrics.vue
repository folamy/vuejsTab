<template lang="html">
  <panel title="Song Lyrics">
    <textarea
      readonly
      v-model="song.lyrics"></textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],

  components: {
    Panel
  }
}
</script>

<style lang="css">
textarea {
   width: 100%;
   font-family: monospace;
   border: none;
   border-color: transparent;
   border-style: none;
   height: 600px;
   overflow: auto;
   padding: 40px
}
</style>
