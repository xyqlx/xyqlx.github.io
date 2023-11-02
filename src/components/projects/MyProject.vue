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
  <div class="scrollbar-container" v-if="currentProject">
    <el-scrollbar view-class="scrollbar" height="calc(100vh - 160px)">
      <div class="project-container">
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
    </el-scrollbar>
  </div>
</template>

<style>
.scrollbar-container {
  width: 100%;
}

.scrollbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.project-container {
  width: 60%;
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
}</style>
