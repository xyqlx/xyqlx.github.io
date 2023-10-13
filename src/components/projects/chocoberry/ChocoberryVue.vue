<script setup lang="ts">
import MyProject from '../MyProject.vue';
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
const html = md.render(`# ChocoberryVue`);
</script>

<template>
  <MyProject>
    <div v-html="html">
    </div>
  </MyProject>
</template>

<style>
</style>
