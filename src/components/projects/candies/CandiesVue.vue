<script setup lang="ts">
import MyProject from '../MyProject.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import MarkdownCell from '../MarkdownCell.vue';
import VideoCell from '../VideoCell.vue';
import activitiesImage from './activities.png';
const urls = {
  'activities.png': activitiesImage,
};
</script>

<template>
  <MyProject project="candies">
    <VideoCell src="https://github.com/xyqlx/xyqlx.github.io/assets/40012783/29eb14a5-6330-473c-96b5-5da5ae0b2316"></VideoCell>
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown" :urls="urls"></MarkdownCell>
  </MyProject>
</template>

<style>

</style>
