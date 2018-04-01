<template>
  <div>
    <H1>Register</H1>
    <input
      type="text"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
     <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
      <br>
      <button type="submit" @click="register">Register</button>
  </div>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: 'asd'
    }
  },
  watch: {
    email (value) {
      console.log('email has changed ', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world!'
    }, 1000)
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
<style scoped>

</style>
