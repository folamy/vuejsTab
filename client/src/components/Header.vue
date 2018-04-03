<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="/" class="home">
        <span>
          TabTracker
        </span>
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark>
          Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <router-link to="login" class="headerLink">
      <v-toolbar-items>
        <v-btn
          flat
          dark
          v-if="!$store.state.isUserLoggedIn">
          Login
        </v-btn>
      </v-toolbar-items>
    </router-link>

    <router-link to="register" class="headerLink">
      <v-toolbar-items>
        <v-btn
          flat
          dark
          v-if="!$store.state.isUserLoggedIn">
          Sign Up
        </v-btn>
      </v-toolbar-items>
    </router-link>

  </v-toolbar>
</template>

<script>
export default {
}
</script>
<style scoped>
  .home {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    text-decoration-style: none
  }
.headerLink {
  /* border: 1px solid red; */
  text-decoration: none
}
</style>
