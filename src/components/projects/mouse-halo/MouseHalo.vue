<script setup lang="ts">
import MyProject from '../MyProject.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import MarkdownCell from '../MarkdownCell.vue';
</script>

<template>
  <MyProject project="MouseHalo">
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown"></MarkdownCell>
  </MyProject>
</template>

<style>
</style>
