<template>
  <v-layout>
    <v-flex xs4 >
      <panel title="Songs Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"></v-text-field>
        <br>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"></v-text-field>
        <br>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"></v-text-field>
        <br>

        <v-text-field
          label="Album Image Url"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"></v-text-field>
        <br>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"></v-text-field>
        <br>

        <v-text-field
          label="Youtub ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"></v-text-field>
        <br>
      </panel>
    </v-flex>
    <v-flex xs8 class="ml-2">
      <panel title="Song Structure" >
        <v-text-field
          label="Guitar Tab"
          multi-line
          required
          :rules="[required]"
          v-model="song.tab"></v-text-field>
      <br>
        <v-text-field
          label="Lyrics"
          multi-line
          required
          :rules="[required]"
          v-model="song.lyrics"></v-text-field>
      </panel>

      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn
        dark
        class="cyan"
        type="submit"
        @click="saveSong">
        Save Song
      </v-btn>
    </v-flex>

  </v-layout>

</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsServices'

export default {
  components: {
    Panel
  },

  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'required.'
    }
  },
  methods: {
    async saveSong () {
      this.error = null
      const areAllFieldFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped>
  .danger-alert {
    color:red
  }
</style>
