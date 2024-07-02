<template>
    <div>
      <h1>Students</h1>
      <ul>
        <li v-for="student in students" :key="student.id">
          <router-link :to="`/students/${student.id}/average`">{{ student.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import apiClient from '@/utils/auth'
  
  export default {
    data() {
      return {
        students: []
      }
    },
    async created() {
        
      try {
        const response = await apiClient.get('/students/')
        
        this.students = response.data
        
      } catch (error) {
        console.error('Error fetching students', error)
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  ul {
    max-width: 600px;
    margin: auto;
  }
  </style>
  