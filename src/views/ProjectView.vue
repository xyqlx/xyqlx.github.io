<script setup lang="ts">
import ProjectSummary from '@/components/projects/ProjectSummary.vue';
import { projects } from '@/components/projects/projects';
</script>

<template>
  <main>
    <el-scrollbar height="calc(100vh - 160px)">
      <div class="projects-container">
        <div v-for="project in projects" :key="project.name">
          <ProjectSummary :project="project" />
        </div>
      </div>
    </el-scrollbar>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

@media (min-width: 1024px) {}
</style>