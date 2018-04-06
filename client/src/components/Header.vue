<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="/" class="home headerLink">
        <span>
          TabTracker
        </span>
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        flat
        dark
        class="headerLink"
        :to="{
          name: 'songs'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        flat
        dark
        class="headerLink"
        :to="{
          name: 'login'
        }"
        v-if="!$store.state.isUserLoggedIn">
        Login
      </v-btn>

      <v-btn
        flat
        dark
        class="headerLink"
        :to="{
          name: 'register'
        }"
        v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>

      <v-btn
        flat
        dark
        class="headerLink"
        @click="logout"
        v-if="$store.state.isUserLoggedIn">
        Log Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // redirect to homepage
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>
<style scoped>
.headerLink:hover{
  /* border: 1px solid red; */
  text-decoration: none
}
</style>
