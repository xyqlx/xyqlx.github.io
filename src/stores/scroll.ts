import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDebounceScrollStore = defineStore('scroll', () => {
  const distance = ref(0)
  const route = ref('')
  return { distance, route }
})
