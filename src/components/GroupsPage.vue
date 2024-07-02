<template>
  <div class="page-container">
    <h1>Groups</h1>
    <ul class="item-list">
      <li v-for="group in groups" :key="group.id">
        <router-link :to="`/groups/${group.id}/average`">{{ group.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '@/utils/auth'

export default {
  data() {
    return {
      groups: []
    }
  },
  async created() {
    try {
      const response = await apiClient.get('/groups/')
      this.groups = response.data
    } catch (error) {
      console.error('Error fetching groups', error)
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

.item-list {
  list-style-type: none;
  padding: 0;
  max-width: 600px;
  margin: auto;
}

.item-list li {
  background: white;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.item-list a {
  text-decoration: none;
  color: #5cb85c;
  font-weight: bold;
}

.item-list a:hover {
  text-decoration: underline;
}
</style>
