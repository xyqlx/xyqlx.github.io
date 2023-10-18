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
    <slot></slot>
  </template>
</template>

<style></style>
