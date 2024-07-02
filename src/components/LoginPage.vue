<template>
  <div class="login-page">
    <h1>Welcome!</h1>
    <form @submit.prevent="login" class="login-form">
      <div>
        <input type="text" v-model="username" placeholder="username"/>
      </div>
      <div>
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import apiClient from '@/utils/auth'
import { notifyError } from '@/utils/notify'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await apiClient.post('/token/', {
          username: this.username,
          password: this.password
        })
        localStorage.setItem('access_token', response.data.access)
        localStorage.setItem('refresh_token', response.data.refresh)
        this.$router.push('/students')
      } catch (error) {
        notifyError('Login failed. Please check your credentials.')
        console.error('Error logging in', error)
      }
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f4f8;
}

.login-page h1 {
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.login-form div {
  margin-bottom: 15px;
}

.login-form label {
  display: block;
  margin-bottom: 5px;
}

.login-form input {
  width: 375px;
  padding: 10px;
  border: 0.5px solid #dddddd;
  border-radius: 4px;
}

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #5cb85c;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #4cae4c;
}
</style>
