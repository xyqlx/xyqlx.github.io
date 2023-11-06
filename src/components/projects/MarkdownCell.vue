<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import { onMounted, ref, toRefs, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  en: string;
  zh: string;
  urls?: {
    [key: string]: string;
  }
}>();
const { en, zh, urls } = toRefs(props);
const md = new MarkdownIt();
const { locale } = useI18n();
const html = ref('');
function replaceUrls(tokens: any[], urls: { [key: string]: string }) {
  const ops = tokens.map(async (token) => {
    if (token.type === 'image') {
      const url = token.attrGet('src');
      if (url && url in urls) {
        const newUrl = urls[url];
        token.attrSet('src', newUrl || url);
      }
    }
    if (token.children) {
      replaceUrls(token.children, urls);
    }
  });
  return ops;
}
watch(locale, () => {
  updateMarkdown();
});
function updateMarkdown(){
  const markdown = locale.value === 'zh-CN' ? zh.value : en.value;
  const parsed = md.parse(markdown, {});
  if(urls?.value !== undefined) {
    replaceUrls(parsed, urls.value);
  }
  html.value = md.renderer.render(parsed, {}, {});
}
onMounted(() => {
  updateMarkdown();
});
</script>

<template>
  <div v-html="html"></div>
</template>

<style scoped>
:deep(h1) {
  font-size: 2rem;
}
:deep(h2) {
  font-size: 1.5rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--color-border);
}
:deep(h3) {
  font-size: 1.2rem;
}
:deep(h1), :deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}
:deep(table), :deep(th), :deep(td) {
  border: 1px solid var(--color-border);
  border-collapse: collapse;
  padding: 0.2rem 0.5rem;
}
:deep(ul), :deep(p) {
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.8rem;
}
:deep(table) {
  margin-top: 0;
  margin-bottom: 0.8rem;
}
:deep(img) {
  max-width: 100%;
}
:deep(p:has(img)) {
  text-align: center;
}
:deep(pre) {
  white-space: pre-wrap;
}
</style>
