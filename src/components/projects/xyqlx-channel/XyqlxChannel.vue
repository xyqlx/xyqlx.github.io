<script setup lang="ts">
import MyProject from '../MyProject.vue';
import MarkdownCell from '../MarkdownCell.vue';
import opfish from './opfish.png';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
const urls = {
  'opfish.png': opfish,
};
</script>

<template>
  <MyProject project="xyqlx-channel">
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown" :urls="urls"></MarkdownCell>
  </MyProject>
</template>

<style scoped>
</style>
