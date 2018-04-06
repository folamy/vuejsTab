<template>
  <div id="app">
    <v-app>
      <page-header />

      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.home {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  /* text-decoration-style: none */
}
.btn:hover{
  /* border: 1px solid red; */
  text-decoration: none;
}
</style>
