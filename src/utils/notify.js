import { useToast } from 'vue-toastification'

const toast = useToast()

export const notifyError = (message) => {
  toast.error(message)
}

export const notifySuccess = (message) => {
  toast.success(message)
}
