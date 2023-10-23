<script setup lang="ts">
import MyProject from '../MyProject.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import MarkdownCell from '../MarkdownCell.vue';
</script>

<template>
  <MyProject project="asoul-cursors">
    <img src="https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/src/assets/images/icon128.png" alt="A-SOUL Cursors" width="100">
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown">
    </MarkdownCell>
  </MyProject>
</template>

<style>
</style>
