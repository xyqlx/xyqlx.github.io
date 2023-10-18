<script setup lang="ts">
import { toRefs } from 'vue';
import { getProject } from './projects';

const props = defineProps<{
  project: string;
}>();
const { project } = toRefs(props);
const currentProject = getProject(project.value);
</script>

<template>
  <template v-if="currentProject">
    <h1>{{ currentProject.name }}</h1>
    <a :href="currentProject.github" v-if="currentProject.github">GitHub</a>
    <a :href="currentProject.gitee" v-if="currentProject.gitee">Gitee</a>
    <div>
      <slot></slot>
    </div>
  </template>
</template>

<style></style>
