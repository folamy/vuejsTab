<template>
  <div class="">
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>

    </v-layout>

    <v-layout>
      <v-flex xs6>
        <tab :song="song"/>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :song="song"/>
      </v-flex>

    </v-layout>

  </div>
</template>

<script>
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import SongService from '@/services/SongsServices'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: null
    }
  },

  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    // console.log(this.song)
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
.btn:hover{
  text-decoration: none;
}
</style>
