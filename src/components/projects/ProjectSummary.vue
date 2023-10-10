<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Project } from './projects';
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  project: Project;
}>();
const { project } = toRefs(props);

const { locale } = useI18n();
const router = useRouter();

function navigate() {
    router.push(`/project/${project.value.name}`);
}
</script>

<template>
  <div class="card" @click="navigate()">
    <div class="name">
      {{ project.name }}
    </div>
    <div class="tags">
      <el-tag class="tag" v-for="tag in project.tags" :key="tag" effect="plain" color="transparent">
        <span v-if="typeof tag === 'string'">{{ tag }}</span>
        <span v-else-if="locale in (tag as any)">{{ (tag as any)[locale] }}</span>
        <span v-else>{{ tag['en'] }}</span>
      </el-tag>
    </div>
  </div>
</template>

<style>
.card {
  border-style: solid;
  border-color: var(--color-border);
  border-width: 1px;
  min-width: 200px;
  width: calc(20vw - 20px);
  padding: 10px;
  cursor: pointer;
}
.card:hover {
  border-color: var(--color-text);
}
.name {
  font-size: 1.5rem;
  word-wrap: break-word;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}
.tag {
  color: var(--color-text);
}
@media (min-width: 1024px) {
  
}
</style>
