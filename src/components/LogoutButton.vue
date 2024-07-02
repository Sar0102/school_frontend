<template>
    <button @click="logout" class="logout-button">Logout</button>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  .logout-button {
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .logout-button:hover {
    background-color: #c9302c;
  }
  </style>
  