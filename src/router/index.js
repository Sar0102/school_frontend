import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import StudentsPage from '@/components/StudentsPage.vue'
import GroupsPage from '@/components/GroupsPage.vue'
import StudentAveragePage from '@/components/StudentAveragePage.vue'
import GroupAveragePage from '@/components/GroupAveragePage.vue'
import NotFound from '@/components/NotFound.vue'
import UnAuthorizedComponent from '@/components/UnAuthorizedComponent.vue'
import ForbbidenComponent from '@/components/ForbbidenComponent.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/students', name: 'Students', component: StudentsPage },
  { path: '/groups', name: 'Groups', component: GroupsPage },
  { path: '/students/:student_id/average', name: 'StudentAverage', component: StudentAveragePage },
  { path: '/groups/:group_id/average', name: 'GroupAverage', component: GroupAveragePage },
  {path: '/401', name: 'UnAuthorizedComponent', component: UnAuthorizedComponent},
  {path: '/403', name: 'ForbbidenComponent', component: ForbbidenComponent},
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('access_token')
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/401')
  } else {
    next()
  }
})

export default router
