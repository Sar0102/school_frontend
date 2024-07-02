import axios from 'axios'
import router from '@/router'
import { notifyError, notifySuccess } from '@/utils/notify'

const apiClient = axios.create({
  baseURL: 'http://localhost:9000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  response => {
    if (response.status === 201 || response.status === 204){
      notifySuccess('Success')
    }
    return response
  },
  error => {
    if (error.response) {
      const status = error.response.status
      const message = error.response.data.message || 'An error occurred'
      if (status === 400) {
        notifyError(`Bad Request: ${message}`)
      } else if (status === 500) {
        notifyError(`Internal Server Error: ${message}`)
      } else if (status === 401) {
        router.push('/401')
      } else if (status === 403) {
        router.push('/403')
      } else if (status === 404) {
        router.push('/404')
      }
    } else {
      notifyError('Network Error. Please check your connection.')
    }
    return Promise.reject(error)
  }
)

export default apiClient
