<script setup lang="ts">
import { ref } from 'vue';
import MyProject from '../MyProject.vue';
import IFrameCell from '../IFrameCell.vue';
</script>

<template>
  <MyProject project="chocoberry">
   <IFrameCell src="https://xyqlx.github.io/chocoberry-ng/" :white-background="true" :scale="0.5" :transform="true"></IFrameCell>
  </MyProject>
</template>

<style>
</style>
