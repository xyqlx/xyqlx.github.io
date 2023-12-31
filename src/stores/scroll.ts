import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThrottleScrollStore = defineStore('scroll', () => {
  const distance = ref(0)
  const route = ref('')
  return { distance, route }
})
