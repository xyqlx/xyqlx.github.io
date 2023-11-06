<script setup lang="ts">
import MyProject from '../MyProject.vue';
import IFrameCell from '../IFrameCell.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import MarkdownCell from '../MarkdownCell.vue';
</script>

<template>
  <MyProject project="rain">
   <IFrameCell src="https://xyqlx.github.io/rain/" :white-background="true"></IFrameCell>
   <MarkdownCell :en="enMarkdown" :zh="zhMarkdown"></MarkdownCell>
  </MyProject>
</template>

<style scoped>
</style>
