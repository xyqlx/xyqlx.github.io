<script setup lang="ts">
import { toRefs, useSlots } from 'vue';
import { getProject } from './projects';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  project: string;
}>();
const { project } = toRefs(props);
const currentProject = getProject(project.value);
const shortcuts = [
  currentProject?.github,
  currentProject?.gitee,
  currentProject?.demo
];
const tagNames = [
  "GitHub",
  "Gitee",
  "Demo"
];
const defaultSlot = useSlots().default
const { t } = useI18n();
</script>

<i18n>
  {
    "en": {
      "under construction": "This page is under construction.",
    },
    "zh-CN": {
      "under construction": "本页面正在建设中。",
    }
  }
</i18n>

<template>
  <div class="project-container" v-if="currentProject">
    <div class="title-bar">
      <h1>{{ currentProject.name }}</h1>
      <div class="shortcuts">
        <template v-for="(url, i) in shortcuts" :key="i">
          <a class="tag-container" v-if="url" :href="url">
            <el-tag class="tag" effect="plain" color="transparent">{{ tagNames[i] }}</el-tag>
          </a>
        </template>
      </div>
    </div>
    <div>
      <slot></slot>
      <template v-if="!defaultSlot">
        {{ t('under construction') }}
      </template>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  width: 65%;
  background: color-mix(in srgb, var(--color-background) 80%, transparent);
  padding-left: 2rem;
  padding-right: 2rem;
}

.title-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.shortcuts {
  margin-top: 0.5rem;
  margin-left: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

a:hover {
  background-color: transparent;
}

.tag {
  color: var(--color-text);
}

.tag:hover {
  text-decoration: underline;
}

.tag-container {
  margin-left: 0.8rem;
}

@media (max-width: 1024px) {
  .project-container {
    width: 100%;
  }
}
</style>
