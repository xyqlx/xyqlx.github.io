<script setup lang="ts">
import ProjectSummary from '@/components/projects/ProjectSummary.vue';
import { projects } from '@/components/projects/projects';
</script>

<template>
  <el-scrollbar height="calc(100vh - 160px)">
    <div class="projects-container">
      <template v-for="project in projects" :key="project.name">
        <ProjectSummary :project="project" />
      </template>
    </div>
  </el-scrollbar>
</template>

<style>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 1024px) {}
</style>