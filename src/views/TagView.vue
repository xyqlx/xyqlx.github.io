<script setup lang="ts">
import { projects, type Project, type localeText } from '@/components/projects/projects';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const tags: Map<string, Project[]> = new Map();
const localeMapTag: Map<string, localeText> = new Map();
for (const project of projects) {
  for (const tag of project.tags) {
    let tagLabel = '';
    if (typeof tag === 'string') {
      tagLabel = tag;
    }
    else {
      tagLabel = (tag as localeText).en;
      localeMapTag.set(tagLabel, tag);
    }
    if (!tags.has(tagLabel)) {
      tags.set(tagLabel, []);
    }
    tags.get(tagLabel)?.push(project);
  }
}
// sort tags by count
const sortedTags = Array.from(tags.keys()).sort((a, b) => tags.get(b)!.length - tags.get(a)!.length);
</script>

<template>
  <div class="tag-container">
    <router-link v-for="tag in sortedTags" :key="tag" :to="'/project?tag=' + tag">
      <el-tag class="tag"  effect="plain" color="transparent" size="large">
        <span v-if="localeMapTag.has(tag) && locale in localeMapTag.get(tag)!">{{ (localeMapTag.get(tag)! as any)[locale]
        }}</span>
        <span v-else-if="localeMapTag.has(tag)">{{ localeMapTag.get(tag)!['en'] }}</span>
        <span v-else>{{ tag }}</span>
        <span class="count">{{ tags.get(tag)!.length }}</span>
      </el-tag>
    </router-link>
  </div>
</template>

<style scoped>
.tag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 60%;
  height: fit-content;
}

.tag {
  color: var(--color-text);
  font-size: 1.2rem;
}

.tag .count {
  margin-left: 0.5rem;
  font-size: 0.8rem;
}

.tag a {
  text-decoration: none;
  color: var(--color-text);
}

.tag a:hover {
  background-color: transparent;
}

@media (max-width: 1024px) {
  .tag-container {
    width: 100%;
  }
}
</style>