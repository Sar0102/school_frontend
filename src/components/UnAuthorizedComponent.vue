<template>
    <div class="error-page">
      <h1>401 - Unauthorized</h1>
      <p>You are not authorized to view this page.</p>
      <router-link to="/">Go to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UnAuthorizedComponent'
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
  