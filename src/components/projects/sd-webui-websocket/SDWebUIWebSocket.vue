<script setup lang="ts">
import MyProject from '../MyProject.vue';
import VideoCell from '../VideoCell.vue';
import MarkdownCell from '../MarkdownCell.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
</script>

<template>
  <MyProject project="sd-webui-websocket">
    <VideoCell src="https://github.com/xyqlx/sd-webui-websocket/assets/40012783/a99087ed-617d-4aa3-ab32-34d8df2330d8"></VideoCell>
   <MarkdownCell :en="enMarkdown" :zh="zhMarkdown"></MarkdownCell>
  </MyProject>
</template>

<style scoped>
</style>
