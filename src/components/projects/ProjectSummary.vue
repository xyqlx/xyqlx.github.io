<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Project } from './projects';
import { toRefs, ref } from 'vue';
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

const imageLoading = ref(project.value.cover ? true : false);
</script>

<template>
  <div :name="project.name" class="card" @click="navigate()">
    <div class="name">
      {{ project.name }}
    </div>
    <div class="tags">
      <router-link v-for="tag in project.tags" :key="tag.toString()" :to="'/project?tag=' + tag" @click.stop=";">
        <el-tag class="tag" effect="plain" color="transparent">
          <span v-if="typeof tag === 'string'">{{ tag }}</span>
          <span v-else-if="locale in (tag as any)">{{ (tag as any)[locale] }}</span>
          <span v-else>{{ tag['en'] }}</span>
        </el-tag>
      </router-link>
    </div>
    <div class="description" v-if="project.description">
      {{ (project.description as any)[locale] }}
    </div>
    <div class="cover" :class="imageLoading ? 'loading' : ''" v-loading="imageLoading"
      element-loading-background="rgba(123, 123, 123, 0.08)" element-loading-text="Loading...">
      <template v-if="project.cover">
        <el-image :src="project.cover" alt="cover" loading="lazy" @load="imageLoading = false"
          @error="imageLoading = false">
        </el-image>
      </template>
      <template v-else>
        <div class="void-image"></div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-style: solid;
  border-color: var(--color-border);
  border-width: 1px;
  min-width: 200px;
  width: calc(20vw - 20px);
  padding: 10px;
  cursor: pointer;
  background-color: var(--color-background);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}

.dark .card {
  box-shadow: rgba(25, 25, 46, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.dark .card:hover {
  border-color: var(--color-text);
  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.name {
  font-size: 1.5rem;
  word-wrap: break-word;
}

.cover {
  flex: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.cover.loading {
  height: 180px;
}

.cover>img {
  width: fit-content;
  max-height: 180px;
  max-width: 100%;
}

.cover>img,
.void-image {
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%,
      100%, 0.075),
    /* shadow ring 👇 */
    0 0 0 1px hsla(0, 0%, 0%, 0.05),
    /* multiple soft shadows 👇 */
    0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
    0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
    0 3.5px 6px hsla(0, 0%, 0%, 0.09);
}

.void-image {
  width: 100%;
  height: 180px;
  background-color: var(--color-border);
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

.dark .tag {
  --el-tag-border-color: var(--el-color-primary);
}

.description {
  margin-top: 10px;
  font-size: 1rem;
  word-wrap: break-word;
}

@media (max-width: 512px) {
  .card {
    width: min(90%, 90vw);
  }
}
</style>
