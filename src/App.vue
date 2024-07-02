<template>
  <div id="app">
    <NavBar v-if="showNavBar" />
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  setup() {
    const route = useRoute()
    const showNavBar = computed(() => route.name !== 'Login')
    return { showNavBar }
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f0f4f8;
  margin: 0;
  padding: 0;
  color: #333;
}
</style>
