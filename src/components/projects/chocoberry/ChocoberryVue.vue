<script setup lang="ts">
import MyProject from '../MyProject.vue';
import IFrameCell from '../IFrameCell.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import MarkdownCell from '../MarkdownCell.vue';
</script>

<template>
  <MyProject project="chocoberry">
   <IFrameCell src="https://xyqlx.github.io/chocoberry-ng/" :white-background="true" :scale="1" :transform-scale="0.5"></IFrameCell>
   <MarkdownCell :en="enMarkdown" :zh="zhMarkdown"></MarkdownCell>
  </MyProject>
</template>

<style>
</style>
