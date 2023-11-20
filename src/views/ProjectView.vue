<script setup lang="ts">
import ProjectSummary from '@/components/projects/ProjectSummary.vue';
import { projects } from '@/components/projects/projects';
import { useDebounceScrollStore } from '@/stores/scroll';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, watch, ref, type Ref, type WatchStopHandle } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()

const projectName = route.hash;
let projectIndex = -1;
if (projectName) {
  projectIndex = projects.findIndex((p) => p.name === projectName.slice(1));
}

const { distance } = storeToRefs(useDebounceScrollStore());

const onScroll = () => {
  // get current top position
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const rect = card.getBoundingClientRect();
    // if card is in viewport, break
    if (rect.top > 0 && rect.top < window.innerHeight) {
      router.replace({ hash: '#' + projects[i].name });
      break;
    }
  }
};

const watchScroll: Ref<WatchStopHandle | undefined> = ref(undefined);

onMounted(() => {
  if (projectIndex !== -1) {
    const card = document.querySelectorAll('.card')[projectIndex];
    card.scrollIntoView();
  }
  watchScroll.value = watch(distance, (val, oldValue)=>{
    if(Math.abs(val - oldValue) > 1){
      onScroll();
    }
  });
});
onUnmounted(() => {
  watchScroll.value?.();
});
</script>

<template>
  <!-- TODO If is in the middle of the page, a prompt message should be displayed indicating that there are still items on it -->
  <div class="projects-container">
    <template v-for="project in projects" :key="project.name">
      <ProjectSummary :project="project" />
    </template>
  </div>
</template>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 1024px) {}
</style>