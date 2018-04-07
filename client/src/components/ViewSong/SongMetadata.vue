<template lang="html">
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn
          dark
          class="cyan view"
          :to="{
            name: 'song-edit',
            params: {
              songId: song.id
            }
          }">
          Edit
        </v-btn>

      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" alt="">
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
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
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px
}
.song-artist {
  font-size: 24px
}
.song-genre {
  font-size: 18px
}
.album-image {
  width: 60%;
  margin: 0 auto;
}
.btn:hover{
  /* border: 1px solid red; */
  text-decoration: none;
}
</style>
