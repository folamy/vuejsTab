<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="Register">
        <form
          name="tabtracker"
          autocomplete="off">

          <v-text-field
            label="Enter Email"
            v-model="email"></v-text-field>
          <br>

          <v-text-field
            type="password"
            label="Enter Password"
            v-model="password"
          ></v-text-field>
          <br>

          <div class="error" v-html="error"></div>

          <v-btn
            dark
            class="cyan"
            type="submit"
            @click="register">
            Register
          </v-btn>
        </form>
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
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
    async register () {
      try {
        const response = await AuthenticationService.register({
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
