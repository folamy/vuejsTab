<template>
  <v-layout>
    <v-flex xs6>
      <div>
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

            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" alt="">
              <br>
              {{song.album}}
            </v-flex>

            
          </v-layout>
        </panel>
      </div>
    </v-flex>

    <v-flex xs6>
    <panel title="Tabs">
      {{song.tab}}
    </panel>
  </v-flex> 
  </v-layout>

</template><v-btn
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

<script>
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
    Panel
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
