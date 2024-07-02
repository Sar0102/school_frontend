<template>
    <nav class="navbar">
      <div class="navbar-links">
        <router-link to="/students">Students</router-link>
        <router-link to="/groups">Groups</router-link>
      </div>
      <LogoutButton />
    </nav>
  </template>
  
  <script>
  import LogoutButton from '@/components/LogoutButton.vue'
  
  export default {
    components: {
      LogoutButton
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
  }
  
  .navbar-links a {
    color: white;
    margin-right: 20px;
    text-decoration: none;
  }
  
  .navbar-links a:hover {
    text-decoration: underline;
  }
  </style>
  