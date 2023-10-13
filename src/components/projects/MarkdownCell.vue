<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import { onMounted, ref, toRefs } from 'vue';
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
  if(urls === undefined) return;
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
onMounted(async () => {
  const markdown = locale.value === 'zh-CN' ? zh.value : en.value;
  const parsed = md.parse(markdown, {});
  replaceUrls(parsed, urls.value);
  html.value = md.renderer.render(parsed, {});
});
</script>

<template>
  <div v-html="html"></div>
</template>

<style></style>
