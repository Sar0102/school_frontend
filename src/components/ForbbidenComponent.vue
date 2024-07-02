<template>
    <div class="error-page">
      <h1>403 - Forbidden</h1>
      <p>You do not have permission to view this page.</p>
      <router-link to="/">Go to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ForbbidenComponent'
  }
  </script>
  
  <style scoped>
  .error-page {
    text-align: center;
    padding: 20px;
  }
  
  .error-page h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  .error-page p {
    margin-bottom: 20px;
  }
  
  .error-page a {
    color: #5cb85c;
    text-decoration: none;
  }
  
  .error-page a:hover {
    text-decoration: underline;
  }
  </style>
  