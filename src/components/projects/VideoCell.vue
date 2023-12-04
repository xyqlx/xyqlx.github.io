<script setup lang="ts">
import { toRefs } from 'vue';


const props = defineProps<{
  src: string
}>();
const { src } = toRefs(props);
</script>

<template class="video-cell">
  <video :src="src" controls autoplay loop muted></video>
</template>

<style scoped>
.video-cell {
  display: flex;
  justify-content: center;
}
video {
  width: 100%;
}
</style>
