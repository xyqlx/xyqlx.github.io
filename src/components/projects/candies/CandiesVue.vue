<script setup lang="ts">
import MyProject from '../MyProject.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import MarkdownCell from '../MarkdownCell.vue';
import activitiesImage from './activities.png';
const urls = {
  'activities.png': activitiesImage,
};
</script>

<template>
  <MyProject project="candies">
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown" :urls="urls"></MarkdownCell>
  </MyProject>
</template>

<style>
</style>
