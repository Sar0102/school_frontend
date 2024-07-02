<template>
  <div class="page-container">
    <h1>Group Average Grades</h1>
    <table class="grades-table">
      <thead>
        <tr>
          <th>Group Name</th>
          <th>Subject</th>
          <th>Average Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grade in grades" :key="grade.subject">
          <td>{{ grade.group_name }}</td>
          <td>{{ grade.subject }}</td>
          <td>{{ grade.avg_grade }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import apiClient from '@/utils/auth'

export default {
  data() {
    return {
      grades: []
    }
  },
  async created() {
    try {
      const group_id = this.$route.params.group_id
      const response = await apiClient.get(`/groups/${group_id}/average/`)
      this.grades = response.data
    } catch (error) {
      console.error('Error fetching group average grades', error)
    }
  }
}
</script>

<style scoped>
.page-container {
  padding: 20px;
  background: #f0f4f8;
  min-height: 100vh;
}

.page-container h1 {
  text-align: center;
  color: #333;
}

.grades-table {
  width: 100%;
  max-width: 800px;
  margin: auto;
  border-collapse: collapse;
}

.grades-table th, .grades-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.grades-table th {
  background-color: #f2f2f2;
}

.grades-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.grades-table tr:hover {
  background-color: #d4d4d4;
}
</style>
