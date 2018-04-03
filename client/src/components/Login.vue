<template>
  <v-layout column>
    <v-flex xs6 offset-xs2>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-flex>
            <v-text-field
              label="Enter Email"
              v-model="email"
            ></v-text-field>
          </v-flex>
          <br>
          <v-flex>
            <v-text-field
            type="password"
              label="Enter Password"
              v-model="password"
            ></v-text-field>
          </v-flex>
          <br>
          <div class="error" v-html="error"></div>
          <v-btn
            dark
            class="cyan"
            type="submit"
            @click="login">
            Login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    // email (value) {
    //   console.log('email has changed ', value)
    // }
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = 'hello world!'
    // }, 1000)
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
<style scoped>

</style>
