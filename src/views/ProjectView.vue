<script setup lang="ts">
import ProjectSummary from '@/components/projects/ProjectSummary.vue';
import { projects, type localeText } from '@/components/projects/projects';
import { useThrottleScrollStore } from '@/stores/scroll';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, watch, ref, type Ref, type WatchStopHandle } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute, type LocationQueryValue } from 'vue-router';
const router = useRouter()
const route = useRoute()
const { t, locale } = useI18n();

const projectName = route.hash;
let projectIndex = -1;
if (projectName) {
  projectIndex = projects.findIndex((p) => p.name === projectName.slice(1));
}

let filteredProjects = projects;
let tagFilter = route.query.tag;
const localeMapTag: Map<string, localeText> = new Map();
for (const project of projects) {
  for (const tag of project.tags) {
    if (typeof tag !== 'string') {
      localeMapTag.set(tag['en'], tag);
    }
  }
}

function updateFilteredProjects(tag: LocationQueryValue | LocationQueryValue[]) {
  tagFilter = tag;
  if (tag) {
    filteredProjects = filteredProjects.filter((p) => {
      for (const t of p.tags) {
        if (typeof t === 'string') {
          if (t === tag) {
            return true;
          }
        }
        else {
          if ('en' in t && t.en === tag) {
            return true;
          }
        }
      }
      return false;
    });
  } else {
    filteredProjects = projects;
  }
}

updateFilteredProjects(tagFilter);

watch(() => route.query.tag, (tag) => {
  updateFilteredProjects(tag);
});

function clearFilterTag() {
  router.replace({ query: { tag: undefined } });
}

const { distance } = storeToRefs(useThrottleScrollStore());

const onScroll = () => {
  // get current top position
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const rect = card.getBoundingClientRect();
    // if card is in viewport, break
    if (rect.top > 0 && rect.top < window.innerHeight) {
      if (!tagFilter){
        router.replace({ hash: '#' + projects[i].name });
      }
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
  watchScroll.value = watch(distance, (val, oldValue) => {
    if (Math.abs(val - oldValue) > 1) {
      onScroll();
    }
  });
});
onUnmounted(() => {
  watchScroll.value?.();
});
</script>

<i18n>
  {
    "en": {
      "tagFilter": "Selected Tag:",
    },
    "zh-CN": {
      "tagFilter": "已选标签：",
    }
  }
</i18n>

<template>
  <div class="project-view">
    <div v-if="tagFilter" class="tag-filter">
      <div>
        <span>{{ t('tagFilter') }}</span>
        <el-tag :key="tagFilter" closable color="transparent" @close="clearFilterTag">
          {{ localeMapTag.has(tagFilter as string) ? (localeMapTag.get(tagFilter as string)! as any)[locale] : tagFilter
          }}
        </el-tag>
      </div>
    </div>
    <!-- TODO If is in the middle of the page, a prompt message should be displayed indicating that there are still items on it -->
    <div class="projects-container">
      <template v-for="project in filteredProjects" :key="project.name">
        <ProjectSummary :project="project" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.project-view {
  display: flex;
  flex-direction: column;
}

.tag-filter {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.tag-filter span {
  margin-right: 0.5rem;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 1024px) {}
</style>