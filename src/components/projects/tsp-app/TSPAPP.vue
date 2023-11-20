<script setup lang="ts">
import MyProject from '../MyProject.vue';
import IFrameCell from '../IFrameCell.vue';
import MarkdownCell from '../MarkdownCell.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
</script>

<template>
  <MyProject project="tsp_app">
    <IFrameCell src="https://xyqlx.github.io/tsp_view/" :white-background="true" :scale="1"></IFrameCell>
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown"></MarkdownCell>
  </MyProject>
</template>

<style scoped>
</style>
