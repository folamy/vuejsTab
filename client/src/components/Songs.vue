<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          class="cyan accent-2 addButton"
          light
          medium
          absolute
          right
          small
          fab
          :to="{
            name: 'songs-create'
          }">
          <v-icon>add</v-icon>
        </v-btn>

        <div v-for="song in songs"
          class="song"
          :key="song.id">

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
                light
                class="cyan view"
                :to="{
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                }">
                View
              </v-btn>

            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" alt="">
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongsServices'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
    console.log(this.songs)
  },
  methods: {
    navigateTo (route) {
      this.router.push(route)
    }
  }
}
</script>
<style scoped>
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
  border: 1px solid red;
  text-decoration: none;
}
</style>
