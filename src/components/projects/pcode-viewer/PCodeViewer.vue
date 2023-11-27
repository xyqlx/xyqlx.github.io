<script setup lang="ts">
import MyProject from '../MyProject.vue';
import MarkdownCell from '../MarkdownCell.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import flowchart from './flowchart.png';
import demo from './demo.png';
const urls = {
  'flowchart.png': flowchart,
  'demo.png': demo
};
</script>

<template>
  <MyProject project="pcode-viewer">
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown" :urls="urls"></MarkdownCell>
  </MyProject>
</template>

<style scoped>
</style>
