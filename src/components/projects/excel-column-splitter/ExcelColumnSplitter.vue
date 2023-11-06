<script setup lang="ts">
import MyProject from '../MyProject.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import MarkdownCell from '../MarkdownCell.vue';
import demoImage from './demo.png';
const urls = {
  'demo.png': demoImage
}
</script>

<template>
  <MyProject project="ExcelColumnSplitter">
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown" :urls="urls"></MarkdownCell>
  </MyProject>
</template>

<style scoped>
</style>
