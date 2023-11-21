import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMarkdownStore = defineStore('markdown', () => {
  const tocUpdate = ref(0)
  function updateToc() {
    tocUpdate.value++
  }
  return { tocUpdate, updateToc }
})
