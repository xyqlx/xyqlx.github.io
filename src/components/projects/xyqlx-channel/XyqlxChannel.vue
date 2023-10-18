<script setup lang="ts">
import MyProject from '../MyProject.vue';
import MarkdownCellVue from '../MarkdownCell.vue';
import opfish from './opfish.png';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
const urls = {
  'opfish.png': opfish,
};
</script>

<template>
  <MyProject project="xyqlx-channel">
    <MarkdownCellVue :en="enMarkdown" :zh="zhMarkdown" :urls="urls"></MarkdownCellVue>
  </MyProject>
</template>

<style>
</style>
